// imports
import ProjectCard from "./ProjectCard";
import testPic from './test.png';


// function
function Portfolio() {
    const projects = [
    {
        id: 1,
        title: "project 1",
        image: testPic,
        description: 'test for description',
        webLink: 'https://www.google.co.uk/',
        gitLink: 'https://github.com/coltondane',
        techArray: ['']
    },
    {
        id: 2,
        title: "project 2",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['']
    },
    {
        id: 3,
        title: "project 3",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['']
    },{
        id: 4,
        title: "project 4",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['']
    },{
        id: 5,
        title: "project 5",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['']
    },{
        id: 6,
        title: "project 6",
        image: testPic,
        description: '',
        webLink: '',
        gitLink: '',
        techArray: ['']
    }
]
    return (
        <div>
            <h1>Portfolio</h1>
            <div style={{display: "flex", maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap'}}>
                {projects.map(project => (
                    <ProjectCard key={project.id} title={project.title} description={project.description} webLink={project.webLink} gitLink={project.gitLink} img={project.image}/>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;