import { useEffect, useRef, useState } from "react";
import { skillsData } from "./data";

const logoBase = "https://sudipoffice.github.io/portfolioImages/images/Portfolio/";
const simpleBase = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/";

const logoMap = {
  "React.js": ["local", "reactjs"],
  "Next.js": ["local", "nextjs"],
  "TypeScript": ["local", "typescript"],
  "JavaScript": ["local", "javascript"],
  "HTML5": ["local", "html"],
  "CSS3": ["local", "css"],
  "Tailwind CSS": ["local", "tailwindcss"],
  "Node.js": ["local", "nodejs"],
  "Express.js": ["local", "expressjs"],
  "Express": ["local", "expressjs"],
  "REST APIs": null,
  "MongoDB": ["local", "mongodb"],
  "Mongoose": ["simple", "mongoose"],
  "Git": ["local", "git"],
  "GitHub": ["local", "github"],
  "Docker": ["local", "docker"],
  "Docker Compose": ["local", "docker"],
  "Gemini": ["simple", "gemini"],
  "Playwright": ["simple", "playwright"],
  "JWT": ["simple", "jsonwebtokens"],
  "Linux": ["simple", "linux"],
  "AWS S3": ["simple", "amazons3"],
  "Nginx": ["simple", "nginx"],
  "LLM APIs (Gemini)": ["simple", "gemini"]
};

const getSkillIcon = (skill) => {
  const entry = logoMap[skill];
  if (!entry) return null;
  const [source, slug] = entry;
  if (source === "local") return `${logoBase}${slug}.webp`;
  return `${simpleBase}${slug}.svg`;
};

const SkillCard = ({ category, index, visible }) => (
  <div
    className={`backdrop-blur-md bg-white/60 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/20 rounded-xl p-4 sm:p-5 shadow-lg transition-all duration-700 ease-out hover:shadow-[0_0_20px_rgba(16,185,129,0.12)] dark:hover:shadow-xl hover:border-emerald-300/30 dark:hover:border-emerald-600/20 hover:-translate-y-0.5 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
    style={{ transitionDelay: `${index * 120}ms` }}
  >
    <div className="flex items-center gap-2 mb-3 sm:mb-4">
      <div className={`h-5 sm:h-6 w-1 rounded-full ${category.accent}`} />
      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">
        {category.category}
      </h3>
    </div>
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 sm:py-2 rounded-full bg-white/70 dark:bg-gray-600/40 text-gray-700 dark:text-gray-200 font-medium border border-gray-200/50 dark:border-gray-500/30 backdrop-blur-sm shadow-sm hover:scale-105 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] dark:hover:shadow-md hover:border-emerald-400/30 dark:hover:border-emerald-500/30 transition-all duration-200 cursor-default"
        >
          {getSkillIcon(skill) && (
            <img
              src={getSkillIcon(skill)}
              alt=""
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
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
      className="relative pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300/20 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-teal-300/20 dark:bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-300/20 dark:bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

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
