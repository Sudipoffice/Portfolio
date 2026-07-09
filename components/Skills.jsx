import { useEffect, useRef, useState } from "react";
import { skillsData } from "./data";

const logoBase = "https://sudipoffice.github.io/portfolioImages/images/Portfolio/";
const logoMap = {
  "React.js": "reactjs",
  "Next.js": "nextjs",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "HTML5": "html",
  "CSS3": "css",
  "Tailwind CSS": "tailwindcss",
  "Node.js": "nodejs",
  "Express.js": "expressjs",
  "REST APIs": "restapis",
  "MongoDB": "mongodb",
  "Git": "git",
  "GitHub": "github",
  "Docker": "docker"
};

const SkillCard = ({ category, index, visible }) => (
  <div
    className={`backdrop-blur-md bg-white/60 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/20 rounded-xl p-4 sm:p-5 shadow-lg transition-all duration-700 ease-out ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 flex items-center gap-2">
      <span className={`w-1 h-4 sm:h-5 rounded-full ${category.accent}`} />
      {category.category}
    </h3>
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 sm:py-2 rounded-full bg-white/70 dark:bg-gray-600/40 text-gray-700 dark:text-gray-200 font-medium border border-gray-200/50 dark:border-gray-500/30 backdrop-blur-sm shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
        >
          {logoMap[skill] && (
            <img
              src={`${logoBase}${logoMap[skill]}.webp`}
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
            />
          )}
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
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
      id="skills"
      className="pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 min-h-screen bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="flex justify-center text-5xl sm:text-6xl md:text-8xl font-extenda40 bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent mb-8 sm:mb-12">
        {'{ SKILLS }'}
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillsData.map((category, i) => (
            <SkillCard key={category.category} category={category} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
