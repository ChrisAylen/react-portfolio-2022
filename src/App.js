import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Portfolio from './containers/portfolio'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Navbar from './components/navBar'

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './helpers/particlesConfig';



function App() {
  const particlesInit=async (main)=>{
    await loadFull(main);
  }
  const location = useLocation();
  const renderOnlyOnHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* particles js */}
      {renderOnlyOnHomePage && <Particles className="particles" params={particlesConfig} init={particlesInit} />}


      {/* navbar component */}
      <Navbar/>

      {/* main page content */}
      <Routes>
        {/* create all the routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

    </div>
  );
}

export default App;
