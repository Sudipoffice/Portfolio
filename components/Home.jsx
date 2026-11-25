import { useEffect, useState } from "react"
import Resume from "../src/assets/files/SudipMandalResume.pdf"
import Parallax from "./Parallax"

const greetings = ["Welcome", "Namaste", "Hi There", "Hello"];

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const minDelay = new Promise((resolve) => setTimeout(resolve, 1800));
    const hardCap = new Promise((resolve) => setTimeout(resolve, 3200));
    Promise.race([Promise.all([fontsReady, minDelay]), hardCap]).then(() => {
      if (!cancelled) setReveal(true);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!reveal) return;
    const t = setTimeout(() => setShowCurtain(false), 850);
    return () => clearTimeout(t);
  }, [reveal]);

  useEffect(() => {
    if (!showCurtain) return;
    const t = setInterval(() => {
      setGreetingIndex((i) => (i + 1) % greetings.length);
    }, 600);
    return () => clearInterval(t);
  }, [showCurtain]);

  return (
    <div
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 overflow-hidden flex flex-col sm:flex-row-reverse justify-around pb-32 sm:pb-0"
    >
      {/* Glow orbs */}
      <Parallax mouseFactor={30} className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <Parallax mouseFactor={24} className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 dark:bg-purple-400/5 rounded-full blur-3xl pointer-events-none" />
      <Parallax mouseFactor={36} className="absolute top-1/2 left-1/2 -ml-48 -mt-48 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Curtain loader */}
      {showCurtain && (
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 sm:gap-8 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 ${
            reveal ? "curtain-up" : ""
          }`}
        >
          <p key={greetingIndex} className="curtain-word">
            <span className="font-extenda30 bg-gradient-to-r from-blue-700 via-purple-500 to-blue-400 bg-clip-text text-transparent text-4xl sm:text-6xl extraTight">
              {greetings[greetingIndex]}
            </span>
          </p>
          <div className="w-44 sm:w-56 h-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shimmer-bar" />
          </div>
        </div>
      )}

      {/* Image part */}
      <div onContextMenu={(e) => e.preventDefault()} className="flex flex-row justify-center sm:justify-evenly pt-0 sm:pt-12 md:pt-12 lg:pt-0 xl:pt-0 w-screen sm:w-5/6 md:w-4/6 lg:w-5/6 xl:w-3/6">
        <div className="relative w-4/6 px-4 sm:px-0 flex justify-end items-end select-none z-0">
          <div className={`absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700 ${loaded ? "opacity-0" : "opacity-100"} transition-opacity duration-500`} />
          {!failed && (
            <img
              src="/images/portfolio/sudipBW.webp"
              alt="Sudip Mandal"
              loading="eager"
              fetchPriority="high"
              width="640"
              height="1113"
              onLoad={() => setLoaded(true)}
              onError={() => { setFailed(true); setLoaded(true); }}
              className={`w-full h-auto object-contain transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          )}
        </div>

        <div className="flex flex-col justify-end items-center py-2 sm:py-4 md:py-4 lg:py-20 xl:py-44 gap-3 sm:gap-4">
          <div className="h-20 sm:h-28 lg:h-36 w-[2px] bg-gradient-to-b from-blue-500 to-transparent"></div>
          {[
            {
              href: "https://www.linkedin.com/in/sudipmandal/",
              color: "hover:text-blue-500",
              glow: "hover:shadow-[0_0_12px_rgba(59,130,246,0.4)]",
              bg: "hover:bg-blue-500/10",
              path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            },
            {
              href: "https://github.com/Sudipoffice",
              color: "hover:text-gray-900 dark:hover:text-gray-100",
              glow: "hover:shadow-[0_0_12px_rgba(107,114,128,0.4)]",
              bg: "hover:bg-gray-500/10 dark:hover:bg-gray-300/10",
              path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            },
            {
              href: "mailto:mandalsudipoffice@gmail.com",
              color: "hover:text-amber-400",
              glow: "hover:shadow-[0_0_12px_rgba(251,191,36,0.4)]",
              bg: "hover:bg-amber-400/10",
              path: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            },
            {
              href: "https://api.whatsapp.com/send?phone=7003071143",
              color: "hover:text-green-500",
              glow: "hover:shadow-[0_0_12px_rgba(34,197,94,0.4)]",
              bg: "hover:bg-green-500/10",
              path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            }
          ].map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-white/60 dark:bg-gray-700/30 backdrop-blur-sm border border-white/20 dark:border-gray-600/10 text-gray-400 dark:text-gray-500 transition-all duration-300 hover:-translate-y-0.5 ${social.color} ${social.glow} ${social.bg} z-10`}
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Content part */}
      <div className="relative z-10 flex flex-col w-screen sm:w-3/6 h-fit sm:h-40 md:h-48 lg:h-48 xl:h-fit mt-4 sm:mt-64 md:mt-64 lg:mt-80 xl:mt-48 mx-0 sm:mx-4 md:mx-8 lg:mx-4 xl:mx-8 justify-center items-center">
        <div className="">
          <div className="flex flex-row justify-around w-5/6">
            <p className={`${reveal ? "hero-line hero-line-1" : ""} font-extenda20 text-gray-500 dark:text-gray-400 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl extraTight`}>
              HI THERE
            </p>
            <p className={`${reveal ? "hero-line hero-line-1" : ""} font-extenda50 text-gray-800 dark:text-gray-300 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl extraTight`}>
              I&apos;M
            </p>
          </div>
          <p className={`${reveal ? "hero-line hero-line-2" : ""} font-extenda30 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent text-7xl sm:text-6xl md:text-9xl lg:text-8xl xl:text-9xl extraTight`}>
            &lt;SUDIP MANDAL&gt;
          </p>
          <div className="flex flex-row justify-around">
            <p className={`${reveal ? "hero-line hero-line-3" : ""} font-extenda10 text-black dark:text-gray-100 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl flex items-end extraTight z-10`}>
              A
            </p>
            <p className={`${reveal ? "hero-line hero-line-3" : ""} font-extenda90 text-gray-600 dark:text-gray-500 sm:text-gray-600 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl extraTight z-10`}>
              FULL STACK <br /> DEVELOPER
            </p>
          </div>
        </div>
        <div className={`${reveal ? "hero-line hero-line-4" : ""} justify-center items-center text-center font-light text-sm sm:text-sm md:text-base lg:text-xl w-5/6 sm:w-6/6 md:w-4/6 my-2 sm:my-8 text-gray-500 dark:text-gray-400`}>
          Nice to meet you. Welcome to my portfolio. Let&apos;s connect and discuss how we can make an impact together!
        </div>

        <a
          href={Resume}
          target="_blank"
          className={`${reveal ? "hero-line hero-line-5" : ""} group relative inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full overflow-hidden text-xs sm:text-sm font-medium transition-all duration-500 hover:-translate-y-0.5`}
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-0 rounded-full border border-blue-500/40 group-hover:border-blue-400/60 transition-colors duration-500" />
          <span className="absolute inset-[1px] rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group-hover:bg-transparent transition-all duration-500" />
          <span className="relative z-10 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
