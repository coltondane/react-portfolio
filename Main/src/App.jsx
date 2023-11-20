// root imports
import "./App.css";
// import root component
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// import click handler helpers
import { aboutMe, portfolio, contactMe, resume } from "./utils/helpers";


function App() {
  return (
    <div className="portfolio-app">
      <header className="header-container">
        <h1>Colton Laidig</h1>
        <div className="navigation">
          <ul>
            <button onClick={() => aboutMe()} className="about-me-btn">
              About Me
            </button>
            <button onClick={() => portfolio()} className="portfolio-btn">
              Portfolio
            </button>
            <button onClick={() => contactMe()} className="contact-btn">
              Contact Me
            </button>
            <button onClick={() => resume()} className="resume-btn">
              Resume
            </button>
          </ul>
        </div>
      </header>
      <div className="content">
        <Portfolio />
        <AboutMe />
        <Contact />
        <Resume />
      </div>
      <footer>
      <div>
      <a href="https://www.linkedin.com/in/colton-laidig-13781424b/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/coltondane" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
    </div>
      </footer>
    </div>
  );
}

export default App;
