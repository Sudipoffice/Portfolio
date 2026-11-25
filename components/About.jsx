import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { experienceData, educationData, aboutData } from "./data";
import Resume from "../src/assets/files/SudipMandalResume.pdf";
import Parallax from "./Parallax";
import Watermark from "./Watermark";

function highlightBio(text, highlights) {
  const escaped = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) => {
    if (highlights.some(h => h.toLowerCase() === part.toLowerCase())) {
      return <span key={i} className="text-teal-500 dark:text-teal-400 font-medium">{part}</span>;
    }
    return part;
  });
}

const TimelineItem = ({ item, index, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative pl-9 sm:pl-11 pb-6 sm:pb-8 last:pb-0 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 180}ms` }}
    >
      <div
        className={`absolute left-[0px] sm:left-[-1px] top-[4px] w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white dark:border-gray-800 shadow-md z-10 transition-all duration-500 ${
          item.dotColor
        } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
        style={{ transitionDelay: `${index * 180 + 200}ms` }}
      />

      <div
        className={`backdrop-blur-md bg-white/70 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/20 rounded-xl p-3.5 sm:p-5 shadow-lg hover:shadow-[0_0_20px_rgba(45,212,191,0.1)] dark:hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 ${
          type === "education" ? item.accentBg : ""
        }`}
        style={{ transitionDelay: `${index * 180 + 100}ms` }}
      >
        {type === "experience" ? (
          <>
            <span className="inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-teal-500 dark:text-teal-400 mb-1">
              {item.period}
            </span>
            <h3 className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-100">
              {item.role}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 mb-2.5">
              {item.company}
              <span className="mx-1.5">·</span>
              {item.location}
            </p>
            <ul className="space-y-1 mb-3">
              {item.highlights.map((h, i) => (
                <li key={i} className="text-[11px] sm:text-sm text-gray-600 dark:text-gray-300 flex gap-2 leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {item.skills.map((s, i) => (
                <span
                  key={i}
                  className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-teal-100/80 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 font-medium border border-teal-200/50 dark:border-teal-700/30"
                >
                  {s}
                </span>
              ))}
            </div>
            {item.proof && (
              <div className="mt-3 pt-3 border-t border-teal-200/50 dark:border-teal-700/30">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                  Internship Proof
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href={item.proof.lor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    title="Open Letter of Recommendation"
                  >
                    <div className="relative overflow-hidden rounded-lg border border-teal-200/60 dark:border-teal-700/30 aspect-[4/3] bg-white dark:bg-gray-800/60">
                      <img
                        src={item.proof.lor}
                        alt="Letter of Recommendation"
                        width="320"
                        height="240"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-2 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-gray-900 text-[10px] sm:text-[11px] font-semibold shadow-md">
                          Open
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="mt-1.5 text-[10px] sm:text-xs font-semibold text-teal-600 dark:text-teal-400 truncate">
                      LOR
                    </p>
                  </a>
                  <a
                    href={item.proof.letter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    title="Open Internship Letter"
                  >
                    <div className="relative overflow-hidden rounded-lg border border-teal-200/60 dark:border-teal-700/30 aspect-[4/3] bg-white dark:bg-gray-800/60">
                      <img
                        src={item.proof.letter}
                        alt="Internship Letter"
                        width="320"
                        height="240"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-2 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-gray-900 text-[10px] sm:text-[11px] font-semibold shadow-md">
                          Open
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <p className="mt-1.5 text-[10px] sm:text-xs font-semibold text-teal-600 dark:text-teal-400 truncate">
                      Letter
                    </p>
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <span className={`inline-block text-[10px] sm:text-xs font-semibold uppercase tracking-widest ${item.accentText} mb-1`}>
              {item.period}
            </span>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100">
                  {item.institution}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {item.degree}
                </p>
                {item.location && (
                  <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {item.location}
                  </p>
                )}
              </div>
              {item.logo && (
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-8 sm:w-10 h-8 sm:h-10 object-contain rounded flex-shrink-0 mt-0.5"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    period: PropTypes.string,
    role: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    dotColor: PropTypes.string,
    accentBg: PropTypes.string,
    accentText: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
    proof: PropTypes.shape({
      lor: PropTypes.string,
      letter: PropTypes.string,
    }),
    institution: PropTypes.string,
    degree: PropTypes.string,
    logo: PropTypes.string,
  }),
  index: PropTypes.number,
  type: PropTypes.oneOf(["experience", "education"]),
};

const About = () => {
  const [visible, setVisible] = useState({ header: false, bio: false, exp: false, edu: false });
  const headerRef = useRef(null);
  const bioRef = useRef(null);
  const expRef = useRef(null);
  const eduRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, header: true }));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, bio: true }));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (bioRef.current) observer.observe(bioRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, exp: true }));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (expRef.current) observer.observe(expRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(prev => ({ ...prev, edu: true }));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (eduRef.current) observer.observe(eduRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      className="relative pt-20 sm:pt-28 md:pt-36 px-4 sm:px-8 md:px-16 lg:px-20 min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/30 to-cyan-50/20 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 overflow-hidden"
    >
      <Parallax speed={-0.15} mouseFactor={26} className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <Parallax speed={0.18} mouseFactor={34} className="absolute bottom-40 right-10 w-80 h-80 bg-cyan-300/20 dark:bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <Parallax speed={0.08} mouseFactor={20} className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/20 dark:bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <Watermark text="ABOUT" speed={0.1} className="-top-6 -right-8 sm:right-0" />
      <Watermark text="SUDIP MANDAL" speed={-0.06} className="-bottom-10 -left-8" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 pb-16">
      {/* LEFT COLUMN: Bio Section */}
      <div className="flex flex-col lg:w-3/5 xl:w-3/5">
        <div ref={headerRef}>
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extenda40 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent transition-all duration-700 ${
              visible.header ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            &lt; ABOUT &gt;
          </h1>
        </div>

        {/* Profile Card */}
        <div
          ref={bioRef}
          className={`my-4 sm:my-6 transition-all duration-700 delay-200 ${
            visible.bio ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="backdrop-blur-md bg-white/70 dark:bg-gray-700/30 border border-white/30 dark:border-gray-600/20 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-shadow duration-300">
            <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-5">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-blue-500/30 dark:ring-blue-400/30">
                  <img
                    src={aboutData.profileImage}
                    alt={aboutData.name}
                    width="320"
                    height="320"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full" />
              </div>
              <div className="flex flex-col gap-2">
                <a href={`tel:+917003071143`} className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 7003071143
                </a>
                <a href={`mailto:mandalsudipoffice@gmail.com`} className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  mandalsudipoffice@gmail.com
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/sudipmandal/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                    LinkedIn
                  </a>
                  <a href="https://github.com/Sudipoffice" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-3 mb-4 sm:mb-5">
              {aboutData.bio.map((p, i) => (
                <p
                  key={i}
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light"
                >
                  {highlightBio(p, aboutData.highlights)}
                </p>
              ))}
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
              {aboutData.chips.map((chip) => (
                <span
                  key={chip}
                  className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-white/70 dark:bg-gray-600/40 text-gray-700 dark:text-gray-300 font-medium border border-gray-200/50 dark:border-gray-500/30 backdrop-blur-sm shadow-sm hover:shadow-[0_0_10px_rgba(45,212,191,0.1)] transition-shadow duration-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Resume Download */}
            <a
              href={Resume}
              download="SudipMandalResume.pdf"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Education Timeline */}
        <div ref={eduRef} className={`mt-8 sm:mt-10 transition-all duration-700 delay-100 ${visible.edu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-7">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-400/50" />
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/50 dark:bg-gray-700/30 backdrop-blur-sm border border-blue-300/30 dark:border-blue-600/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extenda40 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest">
                EDUCATION
              </h2>
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-blue-400/50 to-transparent" />
          </div>
          <div className="relative">
            <div className="absolute left-[5px] sm:left-[5px] top-1 bottom-1 w-0.5 bg-gradient-to-b from-blue-600 via-green-500 to-yellow-500 dark:from-blue-400 dark:via-green-400 dark:to-yellow-400 rounded-full opacity-60" />
            {educationData.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} type="education" />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Experience */}
      <div ref={expRef} className="lg:w-2/5 xl:w-2/5">
        <div className={`mb-6 sm:mb-8 transition-all duration-700 ${visible.exp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-7">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-teal-400/50" />
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/50 dark:bg-gray-700/30 backdrop-blur-sm border border-teal-300/30 dark:border-teal-600/20 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.5)]" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extenda40 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent tracking-widest">
                EXPERIENCE
              </h2>
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-teal-400/50 to-transparent" />
          </div>
          <div className="relative">
            <div className="absolute left-[5px] sm:left-[5px] top-1 bottom-1 w-0.5 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 dark:from-teal-400 dark:via-teal-500 dark:to-teal-600 rounded-full opacity-60" />
            {experienceData.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} type="experience" />
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
