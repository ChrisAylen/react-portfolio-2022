import './App.scss';
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
import Theme from './components/theme';



function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  }
  const location = useLocation();
  const renderOnlyOnHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* particles js */}
      {renderOnlyOnHomePage && <Particles className="particles" params={particlesConfig} init={particlesInit} />}
      <div className='App__navbar-wrapper'>
        {/* navbar component */}
        <Navbar />
      </div>
      {/* main page content */}

      <div className='App__main-content-wrapper'>
        <Theme/>
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
      {/* Put a footer in */}
      <div className='App__footer-wrapper'>
        <footer className="App__footer">
          <p>&copy; {new Date().getFullYear()} - Chris Aylen</p>
          </footer>
        </div>
    </div>
  );
}

export default App;
