import React, { useState, lazy, Suspense } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import Home from '../components/Home.jsx';
import Footer from '../components/Footer.jsx';
import "./App.css"
import CustomCursor from '../components/CustomCursor.jsx';
import SmoothScroll from '../components/SmoothScroll.jsx';

const About = lazy(() => import('../components/About.jsx'));
const Skills = lazy(() => import('../components/Skills.jsx'));
const Projects = lazy(() => import('../components/Projects.jsx'));
const Contact = lazy(() => import('../components/Contact.jsx'));
const AdditionalSkills = lazy(() => import('../components/AdditionalSkills.jsx'));

function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('isDarkMode');
    return stored !== null ? JSON.parse(stored) : true;
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  React.useEffect(() => {
    const sectionId = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    const section = document.getElementById(sectionId);
    if (!section) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(section, { duration: 1.4 });
    } else {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen transition-colors duration-500">
    <CustomCursor/>
    <SmoothScroll/>
      <Navbar theme={[isDark, setIsDark]} />
      <div>
        <section id='home'> <Home/> </section>
        <Suspense fallback={<div className="min-h-screen" />}>
          <section id='about'> <About/> </section>
          <section id='skills'> <Skills/> </section>
          <section><AdditionalSkills/></section>
          <section id='projects'> <Projects/> </section>
          <section id='contact'> <Contact/> </section>
        </Suspense>
      </div>
      <Footer/>
    </div>
  )
}

export default App
