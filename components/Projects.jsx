import { useEffect, useRef, useState } from "react";
import { projectsData } from "./data";
import Parallax from "./Parallax";
import Watermark from "./Watermark";
import PropTypes from "prop-types";

const ArrowUpRight = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 17L17 7M9 7h8v8" />
  </svg>
);

ArrowUpRight.propTypes = { className: PropTypes.string };

const GitHubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

GitHubIcon.propTypes = { className: PropTypes.string };

const shortDescription = (points) => {
  const first = Array.isArray(points) && points.length > 0 ? points[0] : "";
  if (first.length <= 170) return first;
  const cut = first.slice(0, 170).replace(/\s+\S*$/, "");
  return cut.length > 0 ? `${cut}…` : first.slice(0, 167) + "…";
};

const TECH_LIMIT = { feature: 6, tall: 4, wide: 4, compact: 3 };

// Top row (Textile 2/3 + Career 1/3) swaps widths on hover.
// Second row keeps the existing 2:1:1 (NewsFlash 6 / QA 3 / EasyEats 3) split.
const TOP_ROW = [5, 4];
const BOTTOM_ROW = [2, 1, 3];

const ProjectCard = ({ project, index, visible, className = "", onMouseEnter }) => {
  const {
    title,
    subtitle,
    description,
    tech,
    liveUrl,
    githubUrl,
    images,
    accent,
    badge,
    comingSoon,
    layout = "compact",
  } = project;

  const image = images && images.length > 0 ? images[0] : null;
  const initials = title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const isLarge = layout === "feature" || layout === "tall" || layout === "wide";
  const techLimit = TECH_LIMIT[layout] || 3;

  const backdrop = (
    <>
      {image ? (
        <img
          src={image}
          alt={`${title} screenshot`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${accent}`}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <span className="absolute right-5 top-3 font-extenda40 text-6xl text-white/20 select-none">
            {initials}
          </span>
          {comingSoon && (
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/90 border border-white/20 backdrop-blur-sm">
              Preview coming soon
            </span>
          )}
        </div>
      )}

      {/* readability scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
    </>
  );

  return (
    <article
      onMouseEnter={onMouseEnter}
      className={`group relative flex h-full min-w-0 flex-col justify-end overflow-hidden rounded-3xl border border-white/15 dark:border-white/10 shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl ${className} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} live project`}
          className="absolute inset-0 z-0"
        >
          {backdrop}
        </a>
      ) : (
        <div className="absolute inset-0 z-0">{backdrop}</div>
      )}

      <div className="pointer-events-none relative z-10 flex flex-col p-4 sm:p-5 lg:p-6">
        {badge && (
          <span
            className={`mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm ${
              comingSoon
                ? "border-amber-300/40 bg-amber-400/20"
                : "border-white/25 bg-white/15"
            }`}
          >
            {!comingSoon && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />}
            {badge}
          </span>
        )}

        <h3 className={`font-bold text-white leading-tight tracking-tight ${isLarge ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl"}`}>
          {title}
        </h3>
        <p className={`text-white/80 ${isLarge ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs"}`}>
          {subtitle}
        </p>

        {isLarge && (
          <p className="mt-2 max-w-lg text-xs sm:text-sm font-light leading-relaxed text-white/70 line-clamp-2">
            {shortDescription(description)}
          </p>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tech.slice(0, techLimit).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/85 backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
          {tech.length > techLimit && (
            <span className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/70">
              +{tech.length - techLimit}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {comingSoon ? "Preview" : "Live"} <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" /> Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
  visible: PropTypes.bool,
  className: PropTypes.string,
  onMouseEnter: PropTypes.func,
};

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);
  const byId = (id) => projectsData.find((p) => p.id === id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="relative pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/40 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Ambient */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <Parallax speed={-0.15} mouseFactor={28} className="absolute -top-10 -left-20 w-[26rem] h-[26rem] bg-violet-300/20 dark:bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
      <Parallax speed={0.14} mouseFactor={22} className="absolute bottom-0 -right-20 w-[30rem] h-[30rem] bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <Watermark text="PROJECTS" speed={0.14} className="-top-8 -right-10" />

      <div ref={ref} className="relative z-10 w-4/5 mx-auto">
        {/* Heading */}
        <div
          className={`flex justify-end mb-6 sm:mb-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <h2 className="font-extenda40 text-right text-5xl sm:text-6xl md:text-8xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            [ PROJECTS ]
          </h2>
        </div>

        {/* Bento: top row swaps 2/3 <-> 1/3 on hover, bottom row stays 2:1:1 */}
        <div className="flex flex-col gap-4 sm:gap-5">
          <div
            className="flex flex-col md:flex-row gap-4 sm:gap-5"
            onMouseLeave={() => setHovered(null)}
          >
            {TOP_ROW.map((id, i) => {
              const project = byId(id);
              if (!project) return null;
              const isTextile = id === 5;
              const wide = isTextile ? hovered !== 4 : hovered === 4;
              return (
                <ProjectCard
                  key={id}
                  project={project}
                  index={i}
                  visible={visible}
                  onMouseEnter={() => setHovered(id)}
                  className={`min-h-[320px] sm:min-h-[400px] ${wide ? "md:flex-[2]" : "md:flex-[1]"}`}
                />
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row gap-4 sm:gap-5">
            {BOTTOM_ROW.map((id, i) => {
              const project = byId(id);
              if (!project) return null;
              return (
                <ProjectCard
                  key={id}
                  project={project}
                  index={i + TOP_ROW.length}
                  visible={visible}
                  className={`min-h-[240px] ${i === 0 ? "md:flex-[2]" : "md:flex-[1]"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
