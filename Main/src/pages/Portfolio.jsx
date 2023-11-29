// imports
import ProjectCard from "../components/ProjectCard";
import testPic from '../components/test.png';
import hyperdriveImg from '../assets/projectHyperdrive.png';
import marsImg from '../assets/projectMars.png';


// function
function Portfolio() {
    const projects = [
    {
        id: 1,
        title: "Project Hyper-drive",
        image: hyperdriveImg,
        description: "Working alongside a team of four other developers, the motivation for this project came from a desire to produce a product that would be unique, creative, and polished. Our wish was to create an app that challenged us to flex (and build!) our skills that we have learned since beginning our coding journey. Combining a number of technologies as well as concepts that he had learned up to this point, our application functions interactive educational tool aimed at helping people learn about real exoplanets in our galaxy. Utilizing a fun 'game-like' feel  to let users travel virtually through hyperspace.",
        webLink: 'https://project-hyperdrive-5311751cf71e.herokuapp.com/login',
        gitLink: 'https://github.com/kalaniJ94/Project_Hyperdrive',
        techArray: ['JavaScript', 'Tailwind', 'CSS', 'Bootstrap']
    },
    {
        id: 2,
        title: "Project Mars",
        image: marsImg,
        description: 'This application functions similarly to Project Hyper-Drive, but with a different goal. This was the first project I worked on with other developers, and functioned as a way to work on our HTML, CSS, and JavaScript skills as well as gathering info from an API. This app takes basic facts about our Earth, and compares them to other celestial bodies in the solar system to give users a better understanding of the vastness of space.',
        webLink: 'https://kalanij94.github.io/Project-Mars/',
        gitLink: 'https://github.com/kalaniJ94/Project-Mars',
        techArray: ['JavaScript', 'HTML', 'CSS', 'SCSS']
    },
    {
        id: 3,
        title: "project 3",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['JavaScript', 'HTML', 'CSS', 'SCSS']
    },{
        id: 4,
        title: "project 4",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['JavaScript', 'HTML', 'CSS', 'SCSS']
    },{
        id: 5,
        title: "project 5",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['JavaScript', 'HTML', 'CSS', 'SCSS']
    },{
        id: 6,
        title: "project 6",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['JavaScript', 'HTML', 'CSS', 'SCSS']
    }
]
    return (
        <div>
            <h1>Portfolio</h1>
            <div style={{display: "flex", maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap'}}>
                {projects.map(project => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} webLink={project.webLink} gitLink={project.gitLink} img={project.image} techArray={project.techArray}/>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;