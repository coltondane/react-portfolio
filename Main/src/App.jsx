// root imports
import {useState} from 'react';
import "../src/style/App.css";
// import root component
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

// import click handler helpers
// import { aboutMe, portfolio, contactMe, resume } from "./utils/helpers";


function App() {
    // set default state along with state setter
    const [currentSection, setCurrentSection] = useState('About Me');

    const renderAboutMe = () => {
        setCurrentSection('About Me');
    };
    const renderPortfolio = () => {
        setCurrentSection('Portfolio');
    };
    const renderContactMe = () => {
        setCurrentSection('Contact Me');
    };
    const renderResume = () => {
        setCurrentSection('Resume');
    };

  return (
    <div className="portfolio-app">
      <header className="header-container">
        <h1 className='name'>Colton Laidig</h1>
        <nav className="navigation">
          <ul>
            <button onClick={renderAboutMe} className="about-me-btn">
              About Me
            </button>
            <button onClick={renderPortfolio} className="portfolio-btn">
              Portfolio
            </button>
            <button onClick={renderContactMe} className="contact-btn">
              Contact Me
            </button>
            <button onClick={renderResume} className="resume-btn">
              Resume
            </button>
          </ul>
        </nav>
      </header>
      <div className="content">
        {currentSection === "About Me" && <AboutMe />}
        {currentSection === "Portfolio" && <Portfolio />}
        {currentSection === "Contact Me" && <Contact />}
        {currentSection === "Resume" && <Resume />}
      </div>
      <footer>
        <div>
        <a href="https://www.linkedin.com/in/colton-laidig-13781424b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/coltondane" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
