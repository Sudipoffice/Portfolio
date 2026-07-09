import { useEffect, useRef, useState } from "react";
import { projectsData } from "./data";

const ProjectCard = ({ project, index, visible }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImg(prev => (prev + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [project.images]);

  return (
    <div
      className={`flex flex-col backdrop-blur-md bg-white/50 dark:bg-gray-700/20 border border-white/20 dark:border-gray-600/10 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />

      {/* Image */}
      <div className="relative h-48 sm:h-56 lg:h-60 overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <>
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === currentImg ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 dark:from-gray-800/60 to-transparent pointer-events-none" />
            {project.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`transition-all duration-300 ${
                      i === currentImg
                        ? "w-5 h-1.5 bg-white rounded-full shadow-sm"
                        : "w-1.5 h-1.5 bg-white/50 rounded-full hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.accent}`}>
            <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 lg:p-7">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0 pt-0.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-3 py-1.5 rounded-xl bg-blue-500/90 hover:bg-blue-600 text-white font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-3 py-1.5 rounded-xl bg-gray-600/80 hover:bg-gray-700 dark:bg-gray-500/60 dark:hover:bg-gray-400/60 text-white font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            )}
          </div>
        </div>

        <ul className="space-y-1.5 mb-4 sm:mb-5">
          {project.description.map((point, i) => (
            <li key={i} className="text-[11px] sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex gap-2.5">
              <span className="text-blue-400 mt-0.5 flex-shrink-0 text-xs">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[9px] sm:text-[11px] px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-gray-600/30 text-gray-500 dark:text-gray-400 font-medium border border-gray-200/40 dark:border-gray-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="projects"
      className="pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 min-h-screen bg-gray-200 dark:bg-gray-800 overflow-hidden"
    >
      <div className="flex justify-end text-5xl sm:text-6xl md:text-8xl font-extenda40 bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent px-6 sm:px-12 md:px-16 mb-8 sm:mb-12">
        [ PROJECTS ]
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
