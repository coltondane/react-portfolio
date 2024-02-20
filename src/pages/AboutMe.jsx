// imports 
import "../style/aboutMe.css";
import headshotImage from "../assets/profileImg.jpeg";

// function
function AboutMe() {
    return (
        <div>
            <img src={headshotImage} alt="headshot" className="headshot"/>
            <div className="content">
                <p>
                    As a passionate and dedicated Full Stack Software Engineer with a background in Biochemistry and Art, I bring a unique blend of skills and experiences to every project I undertake.
                </p>
                <p>
                    My portfolio showcases a diverse range of projects, each highlighting my proficiency in modern software technologies and languages such as JavaScript, Python, React, SQL, etc. From my first HTML/CSS/JAVA project to the most recent involving authentication, React, and more. I have consistently demonstrated my ability to write clean, concise code.
                </p>
                <p>
                    I am committed to delivering high-quality work that exceeds expectations and drives tangible results. With a strong focus on Innovation, Adaptability, and Continuous Learning, I strive to make a meaningful impact in every endeavor.
                </p>
                <p>
                    Browse through my portfolio, or click the links below to explore my past projects and discover how I can contribute to your team both as a developer and as a creative thinker. And feel free to reach out to me with any questions or opportunities directly through the 'Contact Me' page.
                </p>
            </div>
        </div>
    )
}

export default AboutMe;