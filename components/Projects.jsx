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
  if (first.length <= 160) return first;
  const cut = first.slice(0, 160).replace(/\s+\S*$/, "");
  return cut.length > 0 ? `${cut}…` : first.slice(0, 157) + "…";
};

const ProjectCard = ({ project, index, visible }) => {
  const image = project.images && project.images.length > 0 ? project.images[0] : null;
  const initials = project.title.split(/\s+/).map((w) => w[0]).join("").slice(0, 2);

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-violet-100/40 dark:from-slate-800 dark:to-slate-800">
        {image ? (
          <img
            src={image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 dark:from-violet-400/10 dark:to-fuchsia-400/10">
            <span className="font-extenda40 text-4xl text-violet-500/50 dark:text-violet-300/40">
              {initials}
            </span>
          </div>
        )}

        {/* Top accent hairline */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500/60 via-fuchsia-400/40 to-transparent" />

        {/* Hover reveal */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-black/75 via-black/35 to-transparent pt-16 pb-3.5 pl-4 pr-3 flex justify-end">
          <a
            href={project.liveUrl || project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-white text-xs font-medium tracking-wide"
          >
            View Project
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug tracking-tight">
            {project.title}
          </h3>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live site`}
              className="mt-1 text-slate-400 hover:text-violet-500 dark:hover:text-violet-300 transition-colors duration-300 flex-shrink-0"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-[13px] sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-4 flex-1">
          {shortDescription(project.description)}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium text-violet-600 dark:text-violet-300 bg-violet-500/10 dark:bg-violet-400/10 border border-violet-500/20 dark:border-violet-400/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-slate-200/70 dark:border-white/8 pt-4 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-300 transition-colors duration-300"
            >
              Live <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-300 transition-colors duration-300"
            >
              <GitHubIcon className="w-3.5 h-3.5" /> GitHub
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
};

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
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
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #8b5cf6 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <Parallax speed={-0.15} mouseFactor={28} className="absolute -top-10 -left-20 w-[26rem] h-[26rem] bg-violet-300/20 dark:bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />
      <Parallax speed={0.14} mouseFactor={22} className="absolute bottom-0 -right-20 w-[30rem] h-[30rem] bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <Watermark text="PROJECTS" speed={0.14} className="-top-8 -right-10" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;