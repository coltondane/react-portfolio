// imports 
import "../style/aboutMe.css";
import headshotImage from "../assets/placeholder.png";

// function
function AboutMe() {
    return (
        <div>
            <img src={headshotImage} alt="headshot" className="headshot"/>
            <div className="content">
                <p> My name is Colton and I am a Colorado based software engineer, you can check out more of my accounts via the links below, or reach out directly through the 'contact me' page.</p>
            </div>
        </div>
    )
}

export default AboutMe;