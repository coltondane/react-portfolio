// imports 
import softwareResume from "../assets/software-resume.pdf";
// function
function Resume() {
    return (
        <div>
            <h1>My Resume</h1>
            <div>
                <embed 
                    src={softwareResume} 
                    type="application/pdf"
                    width="80%" 
                    height="600px"
                    />
            </div>
        </div>
    )
}

export default Resume;