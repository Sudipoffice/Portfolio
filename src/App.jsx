import React, { useEffect, useState } from 'react'
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
import Loading from "../components/Loading.jsx"

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

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsFontLoaded(true);
    });
  }, []);


// useEffect(() => {
//   const timeout = setTimeout(() => {
//     setIsImageLoaded(true);
//   }, 4000);

//   return () => clearTimeout(timeout);
// }, []);


  
  const isLoading = !(isImageLoaded && isFontLoaded)

  return (
    <div className={`${isDark? "dark" : ""} `}>
    <CustomCursor/>
      { isLoading? <Loading imgLoad={[isImageLoaded, setIsImageLoaded]}/> :
      <>
      <Navbar theme={[isDark, setIsDark]} />
      <div>
        <section id='home'> <Home imgLoad={[isImageLoaded, setIsImageLoaded]}/> </section>
        <section id='about'> <About/> </section>
        <section id='skills'> <Skills/> </section>
        <section><AdditionalSkills/></section>
        <section id='projects'> <Projects/> </section>
        <section id='contact'> <Contact/> </section>
      </div>
      <Footer/>
      </>
     }
      
    </div>
  )
}

export default App
