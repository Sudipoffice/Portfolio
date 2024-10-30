import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import "./App.css"
import CustomCursor from '../components/CustomCursor.jsx';
import AdditionalSkills from '../components/AdditionalSkills.jsx';

function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  React.useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={`${isDark? "dark" : ""} `}>
    {/* <p className='mx-[7%] left-0 w-[2px] h-[290vw] bg-gray-200 absolute z-0'></p> */}
    <p className='mx-[7%] right-0 w-[2px] h-[290vw] bg-gray-200 dark:bg-gray-800 absolute z-0'></p>
    <CustomCursor/>
      <Navbar theme={[isDark, setIsDark]} />
      <div>
        <section id='home'> <Home/> </section>
        <section id='about'> <About/> </section>
        <section id='skills'> <Skills/> </section>
        <section><AdditionalSkills/></section>
        <section id='projects'> <Projects/> </section>
        <section id='contact'> <Contact/> </section>
      </div>
      <Footer/>
      
    </div>
  )
}

export default App
