import sponsor from '../assets/lockheed-martin-logo.png';

function Footer () {
    return (
        <>
            <div className="footer-container">
                <div className="sponsor-section">
                    <h1>
                        Proudly Sponsored by:
                    </h1>
                    <img src={ sponsor } className="lockheed-logo"/>
                </div>
                <div className="contact-and-location">
                    <div className="contact">
                        <h1>Contact the Project Leads:</h1>
                        <h2 id="lead-role">Electrical & Software Lead </h2>
                        <h3>Ashton Vogel: akvogel@cpp.edu</h3>
                        <h2 id="lead-role">Structural & Systems Lead</h2>
                        <h3>Danielle King: dnking@cpp.edu</h3>
                    </div>
                    <div className="location">
                        <h1>Location:</h1>
                        <h2>California State Polytechnic University of Pomona</h2>
                        <h3>3801 W Temple Ave, Pomona, CA 91768</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;