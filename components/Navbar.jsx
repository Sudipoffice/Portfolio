import React from 'react'
import logoLight from '../src/assets/images/logoLight.png'
import logoDark from '../src/assets/images/logoDark.png'
import DarkLightMode from './DarkLightMode'
import { NavLink } from 'react-router-dom'

const Navbar = ({theme}) => {

  const [isDark, setIsDark] = theme

  return (
    <div>
      <div className={`flex flex-row justify-around items-center fixed w-screen z-50 ${isDark? 'bg-[#0e193c]' : 'bg-indigo-100'}`}>
      <div className={`${isDark? 'bg-[#435897b4]' : 'bg-indigo-300'} p-1 sm:p-3 rounded-full`}>
      <img src={isDark? logoDark : logoLight} alt="" className='w-8 sm:w-16 flex justify-start items-start' />
      </div>
      <nav className={`flex flex-row justify-center items-center text-xs sm:text-sm md:text-md  lg:text-base mx-0 sm:mx-4 md:mx-6 my-6 sm:my-10 font-light z-20 ${isDark? 'text-gray-300' : 'text-black'}`}>
        <NavLink className={({ isActive }) => `${isActive ? ' text-blue-700 dark:text-blue-600 font-bold' : ''} mx-1 sm:mx-2  md:mx-6`} to="/">
        {({ isActive }) => (isActive ? '( Home )' : 'Home')}
        </NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'text-blue-700 dark:text-blue-600 font-bold' : ''} mx-1 sm:mx-2  md:mx-6`} to="/about">
        {({ isActive }) => (isActive ? '< About >' : 'About')}
        </NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'text-blue-700 dark:text-blue-600 font-bold' : ''} mx-1 sm:mx-2  md:mx-6`} to="/skills">{({ isActive }) => (isActive ? '{ Skills }' : 'Skills')}</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'text-blue-700 dark:text-blue-600 font-bold' : ''} mx-1 sm:mx-2  md:mx-6`} to="/projects">{({ isActive }) => (isActive ? '[ Projects ]' : 'Projects')}</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'text-blue-700 dark:text-blue-600 font-bold' : ''} mx-1 sm:mx-2  md:mx-6`} to="/contact">{({ isActive }) => (isActive ? '` Contact `' : 'Contact')}</NavLink>
      </nav>
      <button><DarkLightMode theme={theme}/></button>
      </div>
    </div>
  )
}

export default Navbar
