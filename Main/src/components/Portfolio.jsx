// imports


// functions for header navigation (about me, portfolio, contact, resume)
function aboutMe() {
    console.log("About Me");
}

function portfolio() {
    console.log("Portfolio");
}

function contact() {
    console.log("Contact");
}

function resume() {
    console.log("Resume");
}

function Header() {
    return (
        <header className="header-container">
            <h1>Colton Laidig</h1>
            <div className="navigation">
                <ul>
                    <button
                        onClick={() => aboutMe()}
                        className="about-me-btn"
                    >About Me 
                    </button>
                    <button
                        onClick={() => portfolio()}
                        className="portfolio-btn"
                    >Portfolio
                    </button>
                    <button
                        onClick={() => contact()}
                        className="contact-btn"
                    >Contact 
                    </button>
                    <button
                        onClick={() => resume()}
                        className="resume-btn"
                    >Resume
                    </button>

                </ul>
            </div>
        </header>
    )
    
}