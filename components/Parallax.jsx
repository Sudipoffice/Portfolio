import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

let mouse = { x: 0, y: 0 };
let mouseInit = false;

function initMouseTracking(reduce) {
  if (mouseInit || reduce) return;
  mouseInit = true;
  window.addEventListener(
    "mousemove",
    (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    },
    { passive: true }
  );
}

const Parallax = ({ speed = 0.15, mouseFactor = 0, className = "", style = {}, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    initMouseTracking(reduce);

    let rafId = null;
    let target = 0;
    let current = 0;
    let mtx = 0;
    let mty = 0;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      target = reduce ? 0 : center * speed;
    };

    const tick = () => {
      current += (target - current) * 0.1;
      const ex = reduce ? 0 : mouseFactor;
      mtx += (mouse.x * ex - mtx) * 0.08;
      mty += (mouse.y * ex - mty) * 0.08;
      el.style.transform = `translate3d(${mtx.toFixed(2)}px, ${(current + mty).toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      compute();
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    compute();
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
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
