import "../styles/index.css";
import heroVideo from "../assets/astra-broll-footage.mp4";

function Home() {
  return (
    <>
      <div className="home-page-container">
        <div className="home-page--hero-container">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="home-page--hero-video"
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-eyebrow">CAL POLY POMONA • ASTRA</p>

            <h1>BUILD. FLY. INNOVATE.</h1>

            <p className="hero-description">
              We are a student-led engineering team designing, building, and
              testing autonomous aerial systems.
            </p>

            <div className="hero-actions">
              <a href="/drone">EXPLORE OUR WORK</a>
              <a href="/team">MEET THE TEAM</a>
            </div>
          </div>

          <div className="hero-scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div></div>
          </div>
        </div>
        <div className="home-page--about-container">
          <h1 className="home-page--about-title">BECOME BY DOING.</h1>
          <div className="about-container--cards">
            <div className="about--who">
              <h3>Who We Are</h3>
              <p>
                We are a student-led unmanned aerial systems team operating out
                of the California Polytechnic State University of Pomona.
              </p>
            </div>
            <div className="about--what">
              <h3>What We Do</h3>
              <p>
                We push the boundaries of autonomous aerial technology through
                innovation, collaboration, and hands-on engineering.
              </p>
            </div>
            <div className="about--why">
              <h3>Why We Do It</h3>
              <p>
                We aim to bring a vast majority of students from different
                engineering-disciplines together, by designing, building, and
                testing cutting-edge UAV systems that are capable of real-world
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="home-page--interview-container">
          <div className="interview-video">
            <iframe
              width="800"
              height="655"
              src="https://www.youtube.com/embed/noHoWuwFhBo?si=R4XX7UZjZFSJMFEP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="interview-description-message">
            <h2>
              From the People Leading the Project Ashton and Danielle offer a
              behind-the-scenes look at the project, discussing its purpose, the
              team’s dedication, and what they hope it will achieve moving
              forward.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
