import React, { useEffect, useRef, useState } from 'react'
import logoLight from '../src/assets/images/logoLight.webp'
import logoDark from '../src/assets/images/logoDark.webp'
import DarkLightMode from './DarkLightMode'
import { NavLink } from 'react-router-dom'

const Navbar = ({theme}) => {

  const [isDark, setIsDark] = theme  //Modetoggle state

  //Hamburg menu open/close 
  const [isMenuOpen, setIsMenuOpen] = useState(false)   

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  //nav option object
  const navLinks = [
    { path: '/', label: 'Home', activeLabel: '( Home )' },
    { path: '/about', label: 'About', activeLabel: '< About >' },
    { path: '/skills', label: 'Skills', activeLabel: '{ Skills }' },
    { path: '/projects', label: 'Projects', activeLabel: '[ Projects ]' },
    { path: '/contact', label: 'Contact', activeLabel: '` Contact `' },
  ];
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // onScroll navbar color changes

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 220); // Adjust 50 to the scroll position you prefer
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
    <div className='w-screen'>
    {/* Desktop Nav */}
      <div
        className={`fixed w-screen z-50 ${
          isDark ? 'bg-[#0e193c]' : 'bg-indigo-100'
        } hidden sm:flex justify-around items-center`}
      >
        <div className={`${isDark ? 'bg-[#435897b4]' : 'bg-indigo-300'} my-2 p-3 rounded-full`}>
          <img src={isDark ? logoDark : logoLight} alt="Logo" className="w-8 sm:w-16" />
        </div>
    
        <nav className={`flex text-xs sm:text-sm md:text-md lg:text-base font-light z-20 ${isDark ? 'text-gray-300' : 'text-black'}`}>
          {navLinks.map(({ path, label, activeLabel }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${isActive ? 'text-blue-700 dark:text-blue-600 font-bold' : ''} mx-1 sm:mx-2 md:mx-6`
              }
            >
              {({ isActive }) => (isActive ? activeLabel : label)}
            </NavLink>
          ))}
        </nav>
    
        <button>
          <DarkLightMode theme={theme} />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
  className={`fixed w-screen z-50 flex sm:hidden justify-between items-center px-2
    ${isMenuOpen ? '!bg-indigo-100 dark:!bg-[#0e193c]' : ''}
    ${isScrolled && !isMenuOpen ? 'bg-indigo-100 dark:bg-[#0e193c] shadow-lg' : 'bg-transparent'} `}
>


      <div className='flex justify-start items-center'>
      <div className={`${isDark ? 'bg-[#435897b4]' : 'bg-indigo-300'} p-1 mt-2 mx-2  rounded-full`}>
          <img src={isDark ? logoDark : logoLight} alt="Logo" className="w-12  " />
        </div>
        <p className={`font-light text-sm ${isMenuOpen? '' : ''}  ${isDark? 'text-gray-100' : 'text-gray-900' }`} onClick={toggleMenu} >
        {
          isMenuOpen? "Close" : "Menu"
         }
        </p>
      </div>
      
        <button>
          <DarkLightMode theme={theme} />
        </button>
      </div>

    </div>



    { isMenuOpen?  
        <nav className={`flex sm:hidden flex-col fixed  w-screen h-screen p-8  mt-8 text-md  z-20 ${isMenuOpen? 'bg-indigo-100 dark:bg-[#0e193c] transition-2s'  : 'bg-[#ffffff00]' } ${isDark ? 'text-gray-300' : 'text-black'}`}>
          {navLinks.map(({ path, label, activeLabel }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${isActive ? 'text-blue-700 dark:text-blue-600 font-bold' : ''} my-4`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (isActive ? activeLabel : label)}
            </NavLink>
          ))}
        </nav>  :  null   }
    </>
  )
}

export default Navbar
