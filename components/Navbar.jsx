import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import logoLight from '../src/assets/images/logoLight.webp'
import logoDark from '../src/assets/images/logoDark.webp'
import DarkLightMode from './DarkLightMode'
import { useLocation, Link } from 'react-router-dom'

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

const Navbar = ({theme}) => {
  const [isDark] = theme
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home', activeLabel: '( Home )', id: 'home', color: 'text-blue-700 dark:text-blue-600' },
    { path: '/about', label: 'About', activeLabel: '< About >', id: 'about', color: 'text-sky-500' },
    { path: '/skills', label: 'Skills', activeLabel: '{ Skills }', id: 'skills', color: 'text-emerald-500' },
    { path: '/projects', label: 'Projects', activeLabel: '[ Projects ]', id: 'projects', color: 'text-violet-500' },
    { path: '/contact', label: 'Contact', activeLabel: '` Contact `', id: 'contact', color: 'text-purple-500' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const doc = document.documentElement;
          const max = doc.scrollHeight - window.innerHeight;
          setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

          let current = 'home';
          let minDist = Infinity;
          sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const dist = Math.abs(rect.top);
            if (dist < minDist) {
              minDist = dist;
              current = id;
            }
          });
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const isActive = (id) => activeSection === id;

  return (
    <>
      {/* Desktop Nav */}
      <div
        className={`fixed top-0 left-0 w-full z-50 hidden sm:flex items-center justify-around transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-white/70 via-blue-50/40 to-white/70 dark:from-gray-900/70 dark:via-gray-900/70 dark:to-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="absolute bottom-0 left-0 h-[2px] z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ width: `${progress * 100}%` }} />
        <div className="relative group">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${isScrolled ? '' : 'opacity-30'}`} />
          <div className={`relative p-2 sm:p-2.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.08)]'
              : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md'
          }`}>
            <img src={isDark ? logoDark : logoLight} alt="Logo" className="w-8 sm:w-12" />
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2 z-20">
          {navLinks.map(({ path, label, activeLabel, id, color }) => (
            <Link
              key={path}
              to={path}
              className={`relative px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-light transition-all duration-300 rounded-lg ${
                isActive(id)
                  ? `${color} font-medium scale-[1.04]`
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {isActive(id) ? activeLabel : label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <DarkLightMode theme={theme} />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 left-0 w-full z-50 flex sm:hidden items-center justify-between px-4 transition-all duration-500 ${
          isMenuOpen
            ? 'bg-gradient-to-r from-white/80 via-blue-50/40 to-white/80 dark:from-gray-900/80 dark:via-gray-900/80 dark:to-gray-900/80 backdrop-blur-xl'
            : isScrolled
              ? 'bg-gradient-to-r from-white/70 via-blue-50/40 to-white/70 dark:from-gray-900/70 dark:via-gray-900/70 dark:to-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/5'
              : 'bg-transparent'
        }`}
      >
        <div className="absolute bottom-0 left-0 h-[2px] z-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ width: `${progress * 100}%` }} />
        <div className="flex items-center gap-3">
          <div className={`p-1.5 my-1.5 rounded-full transition-all ${
            isScrolled || isMenuOpen
              ? 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm'
              : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm'
          }`}>
            <img src={isDark ? logoDark : logoLight} alt="Logo" className="w-8 sm:w-10" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <DarkLightMode theme={theme} />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">
              <span className={`block h-[1.5px] w-full bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`} />
              <span className={`block h-[1.5px] w-full bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-x-0' : ''
              }`} />
              <span className={`block h-[1.5px] w-full bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex sm:hidden">
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />
          <nav className="relative w-full h-full flex flex-col items-center justify-center gap-6 p-8">
            {navLinks.map(({ path, label, activeLabel, id, color }) => (
              <Link
                key={path}
                to={path}
                className={`text-lg font-light transition-all duration-300 ${
                  isActive(id) ? `${color} font-medium` : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {isActive(id) ? activeLabel : label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

Navbar.propTypes = {
  theme: PropTypes.array.isRequired,
}

export default Navbar
