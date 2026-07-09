import { useEffect, useState } from 'react'
import logoLight from '../src/assets/images/logoLight.webp'
import logoDark from '../src/assets/images/logoDark.webp'
import DarkLightMode from './DarkLightMode'
import { NavLink } from 'react-router-dom'

const Navbar = ({theme}) => {
  const [isDark, setIsDark] = theme
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home', activeLabel: '( Home )', color: 'text-blue-700 dark:text-blue-600' },
    { path: '/about', label: 'About', activeLabel: '< About >', color: 'text-sky-500' },
    { path: '/skills', label: 'Skills', activeLabel: '{ Skills }', color: 'text-emerald-500' },
    { path: '/projects', label: 'Projects', activeLabel: '[ Projects ]', color: 'text-violet-500' },
    { path: '/contact', label: 'Contact', activeLabel: '` Contact `', color: 'text-purple-500' },
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

  return (
    <>
      {/* Desktop Nav */}
      <div
        className={`fixed top-0 left-0 w-full z-50 hidden sm:flex items-center justify-around transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="relative group">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm ${isScrolled ? '' : 'opacity-30'}`} />
          <div className={`relative p-2 sm:p-2.5 rounded-full transition-all duration-500 ${
            isScrolled
              ? 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm'
              : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md'
          }`}>
            <img src={isDark ? logoDark : logoLight} alt="Logo" className="w-8 sm:w-12" />
          </div>
        </div>

        <nav className="flex items-center gap-1 sm:gap-2 z-20">
          {navLinks.map(({ path, label, activeLabel, color }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                    `relative px-3 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-light transition-all duration-300 rounded-lg ${
                  isActive
                    ? `${color} font-medium`
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`
              }
            >
              {({ isActive }) => (isActive ? activeLabel : label)}
            </NavLink>
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
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl'
            : isScrolled
              ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg shadow-black/5'
              : 'bg-transparent'
        }`}
      >
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
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl" />
          <nav className="relative w-full h-full flex flex-col items-center justify-center gap-6 p-8">
            {navLinks.map(({ path, label, activeLabel, color }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-lg font-light transition-all duration-300 ${
                    isActive ? `${color} font-medium` : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (isActive ? activeLabel : label)}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
