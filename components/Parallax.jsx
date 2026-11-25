import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/*
 * Shared, event-driven parallax engine.
 *
 * All instances share ONE requestAnimationFrame loop, ONE set of scroll/resize
 * listeners and ONE mouse tracker. Instances are only animated while they are
 * inside (or near) the viewport, and the loop stops as soon as every value has
 * settled — so idle pages use no CPU.
 */

const instances = new Set();
const mouse = { x: 0, y: 0 };

let rafId = null;
let listenersBound = false;
let observer = null;
let reduceMotion = false;

function requestTick() {
  if (reduceMotion) return;
  if (rafId == null) rafId = requestAnimationFrame(tick);
}

function recompute(inst) {
  const rect = inst.el.getBoundingClientRect();
  const center = rect.top + rect.height / 2 - window.innerHeight / 2;
  inst.targetY = center * inst.speed;
}

function tick() {
  rafId = null;

  // Read phase: recompute targets for anything visible (batched reads).
  instances.forEach((inst) => {
    if (inst.visible) recompute(inst);
  });

  // Write phase: ease + apply transforms.
  let active = false;
  instances.forEach((inst) => {
    if (!inst.visible) return;

    inst.cy += (inst.targetY - inst.cy) * 0.1;
    const ex = inst.mouseFactor;
    inst.mx += (mouse.x * ex - inst.mx) * 0.08;
    inst.my += (mouse.y * ex - inst.my) * 0.08;

    inst.el.style.transform = `translate3d(${inst.mx.toFixed(2)}px, ${(inst.cy + inst.my).toFixed(2)}px, 0)`;

    if (
      Math.abs(inst.targetY - inst.cy) > 0.1 ||
      Math.abs(mouse.x * ex - inst.mx) > 0.1 ||
      Math.abs(mouse.y * ex - inst.my) > 0.1
    ) {
      active = true;
    }
  });

  if (active) rafId = requestAnimationFrame(tick);
}

function onScroll() {
  requestTick();
}

function onMouseMove(e) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  requestTick();
}

function ensureGlobals() {
  if (listenersBound) return;
  listenersBound = true;
  reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  window.addEventListener("mousemove", onMouseMove, { passive: true });

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const inst = entry.target.__parallax;
        if (!inst) return;
        inst.visible = entry.isIntersecting;
        if (inst.visible) {
          recompute(inst);
          requestTick();
        }
      });
    },
    { rootMargin: "150px 0px" }
  );
}

const Parallax = ({ speed = 0.15, mouseFactor = 0, className = "", style = {}, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ensureGlobals();
    if (reduceMotion) return;

    const inst = {
      el,
      speed,
      mouseFactor,
      visible: false,
      targetY: 0,
      cy: 0,
      mx: 0,
      my: 0,
    };

    instances.add(inst);
    el.__parallax = inst;
    recompute(inst);
    observer.observe(el);

    return () => {
      instances.delete(inst);
      if (observer) observer.unobserve(el);
      delete el.__parallax;
      el.style.transform = "";
    };
  }, [speed, mouseFactor]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
};

Parallax.propTypes = {
  speed: PropTypes.number,
  mouseFactor: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
};

export default Parallax;
