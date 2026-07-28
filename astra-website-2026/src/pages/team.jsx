import { useState } from "react";
import "../styles/teams.css";

import picture from "../assets/picture-placeholder.png";
import team from "../assets/astra-team-photo.JPG";
import danielle from "../assets/danielle.JPG";
import ashton from "../assets/ashton.JPG";
import alissa from "../assets/alissa.JPG";

// Systems Team
import ben from "../assets/ben.jpg";
import michelle from "../assets/Michelle Ramirez.JPG";
import systems from "../assets/systems-group-photo.JPG";
import mia from "../assets/mia.JPG";
import allison from "../assets/allison.JPG";
import systems2 from "../assets/systems2.JPG";

// UAV Design Team
import stephen from "../assets/stephen.JPG";
import neithen from "../assets/uavd-neithen.JPG";
import ianC from "../assets/Ian C.JPG";
import sarah from "../assets/uavd-sarah.JPG";
import jacob from "../assets/uavd-jacob.JPG";
import sullivan from "../assets/uavd-sullivan.JPG";
import kenneth from "../assets/uavd-kenneth.JPG";
import jack from "../assets/uavd-jack.JPG";
import uavD from "../assets/uav-design-team.JPG";
import uavD2 from "../assets/uavd2.jpg";

// GNC Team
import waamiq from "../assets/Waamiq Sharrar.JPG";
import johnF from "../assets/gnc-john.JPG";
import isaac from "../assets/gnc-isaac.JPG";
import nathaniel from "../assets/gnc-nathaniel.JPG";
import maxF from "../assets/gnc-maxF.JPG";
import andrew from "../assets/gnc-andrew.JPG";
import michaelK from "../assets/gnc-michael.JPG";
import francisco from "../assets/gnc-francisco.JPG";
import stephenL from "../assets/gnc-stephen.JPG";
import francis from "../assets/Francis Dominic.JPG";
import gnc1 from "../assets/gnc-team.JPG";
import gnc2 from "../assets/gnc-in-action.JPG";

// Object Recognition Team
import ryan from "../assets/ryan-obj-rec.JPG";
import justin from "../assets/justin-object-rec.JPG";
import michael from "../assets/michael-obj-rec.JPG";
import jimmy from "../assets/jimmy.JPG";
import aro from "../assets/aro.JPG";
import dat from "../assets/dat.JPG";
import len from "../assets/len.JPG";
import objectRec from "../assets/object-recognition-team.JPG";
import objectRec2 from "../assets/obj-rec.JPG";

// Obstacle Avoidance Team
import kevin from "../assets/kevin.JPG";
import rachel from "../assets/rachel.JPG";
import hope from "../assets/hope.JPG";
import pawel from "../assets/pawel.JPG";
import obstacleAvoidance1 from "../assets/obstacle-avoidance-team.JPG";
import obstacleAvoidance2 from "../assets/obs-avo-in-action.JPG";

// Payload Team
import robbie from "../assets/robbie.JPG";
import aidenS from "../assets/Aiden Sanchez.JPG";
import joseAM from "../assets/Jose_A.M.JPG";
import harrison from "../assets/harrisonC.JPG";
import alex from "../assets/alexS.JPG";
import payload from "../assets/payload-team.JPG";
import payload2 from "../assets/payload2.jpg";

// Advisor
import bhandari from "../assets/bhandari-advisor.png";

// Mentors
import joshuaE from "../assets/joshua-estrada.jpg";
import maxG from "../assets/max-gross.jpg";
import leoC from "../assets/leo-chen.jpg";
import mattR from "../assets/matt-romero.jpg";

//Sponsors
import lockheed from "../assets/lockheed-martin-logo.png";

function CardFront({ image, name, role, showHint = false }) {
  return (
    <div className="flip-card__face flip-card__front">
      <img className="flip-card__img" src={image} alt={name} />
      <div className="flip-card__front-caption">
        <h3>{name}</h3>
        <p>{role}</p>

        {showHint && (
          <div className="flip-card__hint-front">
            <span>Learn More</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              className="chevron-icon"
            >
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

function FlipCard({ image, name, role, backText }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className="flip-card"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`Flip card for ${name}`}
    >
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}>
        {/* FRONT */}
        <CardFront image={image} name={name} role={role} showHint />
        {/* BACK */}
        <div className="flip-card__face flip-card__back">
          <h3>{name}</h3>
          <p className="flip-card__role">{role}</p>
          {Array.isArray(backText) ? (
            backText.map((paragraph, index) => (
              <p key={index} className="flip-card__text">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="flip-card__text">{backText}</p>
          )}
          <div className="flip-card__hint-back">
            <span>Flip Back</span>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              aria-hidden="true"
              className="chevron-icon chevron-back"
            >
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

function MemberCard({ image, name, role }) {
  return (
    <div className="profile-card" aria-label={`${name}, ${role}`}>
      <div className="profile-card-inner">
        <CardFront image={image} name={name} role={role} />
      </div>
    </div>
  );
}

function Team() {
  return (
    <>
      <div className="team-page--shell">
        <section className="team-page__header">
          <div className="team-hero__grid" aria-hidden="true" />
          <div className="team-hero__content">
            <div className="team-hero__text">
              <p className="team-eyebrow">Bronco ASTRA Members</p>
              <h1 className="team-hero__title">
                Meet the Minds Behind
                <br />
                <em>ASTRA</em>
              </h1>
              <p className="team-hero__copy">
                The Bronco ASTRA team is composed of a diverse group of students
                from various engineering disciplines, each bringing their unique
                skills and perspectives to the project.
              </p>
            </div>
            <div className="team-hero__image">
              <img src={team} alt="Bronco ASTRA Team" />
            </div>
          </div>
        </section>
        <div className="team-page--grid">
          <aside className="sidenav-container" aria-label="On This Page">
            <h2>On This Page</h2>
            <ul>
              <li>
                <a href="#leads">Project Leads</a>
              </li>
              <li>
                <a href="#uav">UAV Design</a>
              </li>
              <li>
                <a href="#payload">Payload</a>
              </li>
              <li>
                <a href="#gnc">GNC</a>
              </li>
              <li>
                <a href="#obj-rec">Object Recognition</a>
              </li>
              <li>
                <a href="#obs-avo">Obstacle Avoidance</a>
              </li>
              <li>
                <a href="#sys">Systems</a>
              </li>
              <li>
                <a href="#advisors">Advisors/Mentors</a>
              </li>
              <li>
                <a href="#sponsors">Sponsors</a>
              </li>
            </ul>
          </aside>
          <div className="team-content">
            <div className="project-leads-container" id="leads">
              <h2 className="project-leads-container__title">Project Leads</h2>
              <div className="project-leads-cards">
                <FlipCard
                  image={ashton}
                  name="Ashton Vogel"
                  role="Electrical & Software Lead"
                  backText={[
                    "As our Electrical / Software Project Lead, Ashton guides the technical development of the drone’s electrical and autonomous capabilities, while ensuring that all subsystems integrate into a cohesive and high-performing system. His leadership centers on defining how the aircraft senses, interprets, and responds to its environment, ensuring reliable performance in dynamic, real-world mission conditions. ",

                    "With a background in Electrical Engineering and hands-on experience in embedded systems, circuit design, and system integration, Ashton brings strong technical expertise to the team. His work spans onboard electronics, flight control architecture, and perception-driven functionality, enabling the aircraft to process environmental data and make real-time decisions. His experience with embedded platforms and system-level troubleshooting allows him to connect low-level implementation with overall system behavior. ",

                    "His leadership is reflected in his driven approach, setting technical direction and ensuring that all components function together as an integrated architecture. He plays a key role in guiding design decisions, resolving complex technical challenges, and maintaining consistency between sensing, control, and actuation throughout development.",

                    "As a strong advocate for hands-on engineering and iterative validation, Ashton finds fulfillment in refining complex systems through testing and integration. He is motivated by the challenge of transforming advanced autonomy concepts into a dependable, flight-ready system and takes pride in driving the technical excellence of the team. ",

                    "Outside of the project, Ashton enjoys weightlifting, video games (at one point considered going pro in Overwatch), and studying the Bible. He is excited to see the team’s work come to life at competition and is driven to deliver a robust and high-performing aircraft. ",
                  ]}
                />
                <FlipCard
                  image={danielle}
                  name="Danielle King"
                  role="Structural & Systems Lead"
                  backText={[
                    "As our Structural / Systems Project Lead, Danielle guides the development of an integrated and mission-ready aircraft, while maintaining program organization and alignment. Her leadership ensures that design decisions across the aircraft support performance, safety, and overall mission success, while keeping the team coordinated and on track.",

                    "With a background in aerospace engineering and industry experience at Northrop Grumman, Danielle brings a practical and systems-level perspective to the team. Her experience includes working within structured engineering environments, contributing to system-level problem solving, and taking on leadership roles in prior technical projects, allowing her to approach complex design challenges with both organization and clarity.",

                    "Within the project, her leadership is defined by her emphasis on coordination and consistency, setting high-level goals, managing timelines, working closely with the project advisor, and coordinating budget decisions. She focuses on keeping the team aligned without excessive pressure, fostering a collaborative environment where steady progress and clear communication drive results.",

                    "She takes pride in building a team culture that values balance, accountability, and mutual support, ensuring that members can contribute effectively without burnout. She is motivated by the challenge of bringing together diverse technical efforts into a cohesive and competition-ready aircraft.",

                    "Outside of the project, Danielle enjoys traveling, baking, exploring new foods, and playing video games (Overcooked :D). She is excited to apply the experience gained from this project to her upcoming full-time position after graduation and looks forward to seeing the team’s work come together at competition.",
                  ]}
                />
              </div>
            </div>
            <div className="UAV-Design-container" id="uav">
              <h2 className="uav-design--title">
                Unmanned Aerial Vehicle Design <br /> UAVD
              </h2>
              <section className="UAVD-lead">
                <FlipCard
                  image={stephen}
                  name="Stephen Posner"
                  role="UAV Design Lead"
                  backText={[
                    "Stephen was a member of the UAV Design team for a year and was promoted to the lead position this season. He is an Aerospace Engineering student with a minor in Materials Engineering, with experience in structural design, manufacturing, and mechanical system development. Through his involvement in the project and coursework, he has developed a strong understanding of iterative design, and how material selection, and structural design influences performance, durability, and overall system reliability.",
                    "As the UAV Design Lead, Stephen is responsible for the design, manufacturing, assembly, and maintenance of the UAV. He oversees the development of the drone’s airframe and physical systems, ensuring that designs are optimized for strength, weight, and performance. His role focuses on translating design concepts into a manufacturable and reliable platform, while supporting integration with other subsystems to ensure cohesiveness, and adaptability for future modifications.",
                    "In his free time, Stephen enjoys traveling with friends, cooking, and working on his 1995 Miata whenever he finds the time. He is excited to see the team’s work come together and looks forward to competing in Tulsa, Oklahoma.",
                  ]}
                />
                <FlipCard
                  image={alissa}
                  name="Alissa Everman"
                  role="Vehicle Integration Systems Lead"
                  backText={[
                    "Alissa began as a member of the Systems Engineering team for a year and was promoted to a lead position this season. She is an Aerospace Engineering student with experience in system-level integration and cross-team coordination, having worked closely with multiple subteams in the previous project season. In addition to her academic experience, she has overcome design challenges and integrated systems through rigorous coursework and industry exposure through an internship with Northrop Grumman Mission Systems.",
                    "As the Vehicle Integrated Systems Lead, Alissa is responsible for overseeing the integration of the UAV Design and Payload subteams, ensuring that parallel development efforts remain aligned and compatible. She coordinates tasks across subteams, tracks progress on key deliverables, and supports design decisions to ensure that all subsystems come together cohesively. Her role focuses on maintaining consistent progress across both teams and preventing integration challenges by facilitating communication and alignment throughout all phases of development.",
                    "In her free time, Alissa enjoys reading, outdoor activities (pickleball!!!), playing video games, and spending time with her pets and friends. She is excited to see the team’s work come together and looks forward to competing in Oklahoma.",
                  ]}
                />
              </section>
              <section className="UAVD-members">
                <MemberCard
                  image={neithen}
                  name="Neithen Navarro"
                  role="UAV Design Member"
                />
                <MemberCard
                  image={ianC}
                  name="Ian Coffman"
                  role="UAV Design Member"
                />
                <MemberCard
                  image={sarah}
                  name="Sarah Pu"
                  role="UAV Design Member"
                />
                <MemberCard
                  image={jacob}
                  name="Jacob Alatorre"
                  role="UAV Design Member"
                />
                <MemberCard
                  image={sullivan}
                  name="Sullivan Barber"
                  role="UAV Design Member"
                />
                <MemberCard
                  image={kenneth}
                  name="Kenneth Su"
                  role="UAV Design Member"
                />
                <MemberCard
                  image={jack}
                  name="Jack Najarian"
                  role="UAV Design Member"
                />
              </section>
              <div className="uavd-about">
                <section className="uav-sec-one">
                  <img src={uavD}></img>
                  <p>
                    The UAV Design subteam is responsible for developing the
                    physical platform that supports all onboard systems. This
                    includes the airframe, propulsion system, and component
                    layout, with a focus on balancing weight, strength, and
                    aerodynamic performance. The team oversees manufacturing,
                    assembly, and maintenance, ensuring the aircraft remains
                    structurally sound and flight-ready throughout testing and
                    competition.{" "}
                  </p>
                </section>
                <section className="uav-sec-two">
                  <p>
                    Their work directly impacts flight stability, endurance, and
                    the ability to carry and support all subsystems. A
                    well-designed platform enables consistent performance, while
                    poor structural decisions can limit or compromise the entire
                    system. UAV Design serves as the foundation that allows
                    every other subteam’s work to be successfully integrated and
                    operated in flight.
                  </p>
                  <img src={uavD2}></img>
                </section>
              </div>
            </div>
            <div className="payload-container" id="payload">
              <h2 className="payload--title">Payload</h2>
              <section className="payload-lead">
                <FlipCard
                  image={robbie}
                  name="Robbie Adriano"
                  role="Payload Lead"
                  backText={[
                    "Robbie joined the team this season and was promoted to a lead position in his first year. He is a Mechanical Engineering student with an interest in hands-on design and testing, bringing a practical and team-oriented approach to engineering challenges. Through his involvement in the project, he has developed experience in coordinating team efforts and supporting the development of reliable mechanical systems.",
                    "As the Payload Lead, Robbie is responsible for leading the design and testing of the payload delivery system, ensuring it integrates safely with the aircraft without interfering with other components or affecting flight performance. He coordinates meetings, delegates tasks, and sets deadlines to keep the team on track, while also fostering a positive and collaborative team environment. His role focuses on improving system reliability and consistency through testing and iteration, while maintaining close communication with other subteams to ensure full integration across the aircraft.",
                    "In his free time, Robbie enjoys running, playing video games, tennis, and traveling. He is excited to contribute to the team’s success and looks forward to competing.",
                  ]}
                />
                <FlipCard
                  image={alissa}
                  name="Alissa Everman"
                  role="Vehicle Integration Systems Lead"
                  backText={[
                    "Alissa began as a member of the Systems Engineering team for a year and was promoted to a lead position this season. She is an Aerospace Engineering student with experience in system-level integration and cross-team coordination, having worked closely with multiple subteams in the previous project season. In addition to her academic experience, she has overcome design challenges and integrated systems through rigorous coursework and industry exposure through an internship with Northrop Grumman Mission Systems.",
                    "As the Vehicle Integrated Systems Lead, Alissa is responsible for overseeing the integration of the UAV Design and Payload subteams, ensuring that parallel development efforts remain aligned and compatible. She coordinates tasks across subteams, tracks progress on key deliverables, and supports design decisions to ensure that all subsystems come together cohesively. Her role focuses on maintaining consistent progress across both teams and preventing integration challenges by facilitating communication and alignment throughout all phases of development.",
                    "In her free time, Alissa enjoys reading, outdoor activities (pickleball!!!), playing video games, and spending time with her pets and friends. She is excited to see the team’s work come together and looks forward to competing in Oklahoma.",
                  ]}
                />
              </section>
              <section className="payload-members">
                <MemberCard
                  image={harrison}
                  name="Harrison Chung"
                  role="Payload Member"
                />
                <MemberCard
                  image={alex}
                  name="Alex Silyaev"
                  role="Payload Member"
                />
                <MemberCard
                  image={joseAM}
                  name="Jose A. Mora"
                  role="Payload Member"
                />
                <MemberCard
                  image={aidenS}
                  name="Aiden Sanchez"
                  role="Payload Member"
                />
              </section>
              <div className="payload-about">
                <section className="payload-sec-one">
                  <p>
                    The Payload subteam develops the systems responsible for
                    delivering mission-critical objects with accuracy and
                    consistency. This includes designing drop mechanisms,
                    mounting systems, and ensuring safe integration with the
                    aircraft without interfering with flight performance or
                    other components. The team focuses heavily on testing and
                    iteration to improve reliability under real flight
                    conditions.
                  </p>
                  <img src={payload2}></img>
                </section>
                <section className="payload-sec-two">
                  <img src={payload}></img>
                  <p>
                    Payload plays a direct role in mission success, as accurate
                    and repeatable delivery is required to meet competition
                    objectives. The team works closely with navigation and
                    object recognition systems to ensure that targeting, timing,
                    and deployment are aligned. Without a reliable payload
                    system, the aircraft cannot fully complete its mission,
                    regardless of its autonomy or flight capability.
                  </p>
                </section>
              </div>
            </div>
            <div className="GNC-container" id="gnc">
              <h2 className="gnc--title">
                Guidance, Navigation, and Control <br /> GNC
              </h2>
              <section className="gnc-lead">
                <FlipCard
                  image={waamiq}
                  name="Waamiq Sharrar"
                  role="GNC Lead"
                  backText={[
                    "Waamiq was a member of the GNC for two years before becoming the lead of that same team. He is a Computer Engineering student with experience in electrical and software systems, with a focus on avionics and system integration. Through his involvement in the project and continued work on personal engineering projects, he has developed a strong foundation in designing and implementing systems that enable reliable and autonomous operation.",
                    "As the Guidance, Navigation, and Control (GNC) Lead, Waamiq is responsible for overseeing the development and integration of the drone’s avionics and control systems, ensuring that all components work together to support stable and autonomous flight. He manages electrical system integration across subteams, supports the implementation of control logic, and ensures that onboard systems are properly configured and powered for sustained operation. His role focuses on enabling reliable system behavior and advancing the team’s autonomy capabilities through cohesive electrical and software integration.",
                    "In his free time, Waamiq enjoys spending time with friends, playing video games, and working on personal electrical and software projects. He is excited to continue developing his technical skills and looks forward to seeing the team’s system perform at competition.",
                  ]}
                />
              </section>
              <section className="gnc-members">
                <MemberCard
                  image={johnF}
                  name="John Fernandez"
                  role="GNC Member"
                />
                <MemberCard
                  image={isaac}
                  name="Isaac Gutierrez"
                  role="GNC Member"
                />
                <MemberCard
                  image={nathaniel}
                  name="Nathaniel Santella"
                  role="GNC Member"
                />
                <MemberCard image={maxF} name="Max Fine" role="GNC Member" />
                <MemberCard image={andrew} name="Andrew A" role="GNC Member" />
                <MemberCard
                  image={michaelK}
                  name="Michael Kaydanik"
                  role="GNC Member"
                />
                <MemberCard
                  image={francisco}
                  name="Francisco Pulido"
                  role="GNC Member"
                />
                <MemberCard
                  image={stephenL}
                  name="Stephen Liu"
                  role="GNC Member"
                />
                <MemberCard
                  image={francis}
                  name="Francis Dominic Saspa"
                  role="GNC Member"
                />
              </section>
              <div className="gnc-about">
                <section className="gnc-sec-one">
                  <img src={gnc1}></img>
                  <p>
                    The GNC subteam develops the algorithms and control logic
                    that allow the aircraft to navigate and execute its mission
                    autonomously. This includes waypoint navigation, search grid
                    pathing, autonomous takeoff and landing, and overall flight
                    control behavior. The team is responsible for translating
                    mission objectives into precise and repeatable flight
                    actions.
                  </p>
                </section>
                <section className="gnc-sec-two">
                  <p>
                    GNC is essential to system functionality, as it connects all
                    high-level mission tasks to physical aircraft movement. Even
                    with accurate perception and reliable hardware, the system
                    cannot perform without effective navigation and control. The
                    subteam ensures that the aircraft can move intentionally,
                    respond to mission inputs, and operate consistently in
                    real-world conditions.
                  </p>
                  <img src={gnc2}></img>
                </section>
              </div>
            </div>
            <div className="object-recognition-container" id="obj-rec">
              <h2 className="object-recognition--title">Object Recognition</h2>
              <section className="obj-rec-lead">
                <FlipCard
                  image={ryan}
                  name="Ryan Tran"
                  role="Object Recognition Lead"
                  backText={[
                    "Ryan was promoted to a lead position this season after contributing as a member of the Object Recognition team last year. He is a Computer Engineering student with experience in computer vision, autonomous systems, and robotics frameworks such as ROS 2. Through his continued involvement in the project, he has developed a strong understanding of how perception systems support autonomous mission execution.",
                    "As the Object Recognition Lead, Ryan is responsible for overseeing the integration of hardware and software used for object detection and mapping, ensuring that the system performs reliably during mission operations. He manages the implementation of perception algorithms on onboard computing platforms and works to ensure that detection outputs align with navigation and control requirements. His role focuses on enabling accurate environmental awareness and supporting the drone’s ability to complete mission objectives through reliable perception.",
                    "In his free time, Ryan enjoys playing sports, video games, weightlifting, and spending time with friends. He is excited to continue advancing the team’s autonomy capabilities and looks forward to competing in Tulsa, Oklahoma.",
                  ]}
                />
              </section>
              <section className="obj-rec-members">
                <MemberCard
                  image={michael}
                  name="Michael Castillo"
                  role="Object Recognition - Machine Learning/ Integration"
                />
                <MemberCard
                  image={len}
                  name="Len Sakimukai"
                  role="Object Recognition - Mapping/ Integration"
                />
                <MemberCard
                  image={aro}
                  name="Areg Hovumyan"
                  role="Object Recognition - Machine Learning/ Integration"
                />
                <MemberCard
                  image={justin}
                  name="Justin Drake Santos"
                  role="Object Recognition - Mapping/ Website Developer"
                />
                <MemberCard
                  image={dat}
                  name="Dat Nguyen"
                  role="Object Recognition - Machine Learning/ Integration"
                />
                <MemberCard
                  image={jimmy}
                  name="Jimmy Nguyen"
                  role="Object Recognition - Machine Learning / Integration"
                />
              </section>
              <div className="obj-rec-about">
                <section className="obj-rec-sec-one">
                  <p>
                    The Object Recognition subteam is responsible for enabling
                    the aircraft to interpret its environment and identify
                    mission targets. This includes developing image processing
                    pipelines, object detection models, and mapping capabilities
                    that process data from onboard sensors. The system
                    identifies targets, determines their location, and provides
                    this information to other subsystems for decision-making.
                  </p>
                  <img src={objectRec2}></img>
                </section>
                <section className="obj-rec-sec-two">
                  <img src={objectRec}></img>
                  <p>
                    Object Recognition plays a key role in mission execution by
                    providing the information needed for navigation and payload
                    delivery. Accurate detection and classification directly
                    impact the system’s ability to complete tasks successfully.
                    The subteam connects perception to action, allowing the
                    aircraft to make informed decisions based on its
                    surroundings.
                  </p>
                </section>
              </div>
            </div>
            <div className="obstacle-avoidance-container" id="obs-avo">
              <h2 className="obstacle-avoidance--title">Obstacle Avoidance</h2>
              <section className="obs-avo-lead">
                <FlipCard
                  image={kevin}
                  name="Kevin Kopcinski"
                  role="Obstacle Avoidance Lead"
                  backText={[
                    "Kevin filled the lead position this season after contributing as a member of the Obstacle Avoidance team in the previous year. He is a Computer Science and Physics student with experience in microcontrollers, robotics frameworks such as ROS 2, and hands-on work with drones over the past several years. His background provides a strong foundation in both the hardware and software aspects of real-time autonomous systems.",
                    "As the Obstacle Avoidance Lead, Kevin is responsible for coordinating the development and testing of the drone’s obstacle detection and avoidance capabilities. He organizes test flights, assigns tasks, and designs the data processing pipeline that enables sensor data to be interpreted and used for real-time decision-making. His team processes LiDAR data and ensures it is properly communicated to the flight controller, allowing the aircraft to safely navigate its environment.",
                    "In his free time, Kevin enjoys spending time with friends and flying his own drone. He is excited to continue developing the team’s autonomy systems and looks forward to competing in Tulsa, Oklahoma.",
                  ]}
                />
              </section>
              <section className="obs-avo-members">
                <MemberCard
                  image={rachel}
                  name="Rachel Martinez"
                  role="Obstacle Avoidance"
                />
                <MemberCard
                  image={pawel}
                  name="Pawel Chowdhury"
                  role="Obstacle Avoidance"
                />
                <MemberCard
                  image={hope}
                  name="Hope Gomez"
                  role="Obstacle Avoidance/ Website Developer"
                />
              </section>
              <div className="obs-avo-abou">
                <section className="obs-avo-sec-one">
                  <img src={obstacleAvoidance1}></img>
                  <p>
                    The Obstacle Avoidance subteam develops the systems that
                    allow the aircraft to safely navigate dynamic environments.
                    Using sensor inputs such as LiDAR, the team processes
                    environmental data and generates real-time path adjustments
                    to prevent collisions. This includes obstacle detection,
                    data filtering, and dynamic pathfinding.
                  </p>
                </section>
                <section className="obs-avo-sec-two">
                  <p>
                    Their work ensures that the aircraft can adapt to unexpected
                    conditions without interrupting mission execution. Obstacle
                    avoidance is critical for maintaining safety and enabling
                    true autonomy, as it allows the system to operate beyond
                    controlled or pre-mapped environments. Without this
                    capability, the aircraft would be limited in both
                    reliability and real-world applicability.
                  </p>
                  <img src={obstacleAvoidance2}></img>
                </section>
              </div>
            </div>
            <div className="systems-container" id="sys">
              <h2 className="systems--title">Systems</h2>
              <section className="systems-lead">
                <FlipCard
                  image={ben}
                  name="Thien Nam Anh Vu"
                  role="Systems Lead"
                  backText={[
                    "Ben was promoted to a lead position this season after contributing as both a pilot and a Systems Engineering team member in the previous year. He is an Industrial Engineering student with experience in coordination, process management, and system-level organization. In addition to his academic background, he is a certified pilot and has professional experience in photography and videography, giving him a unique perspective on both technical and visual aspects of the project. ",
                    "As the Systems Engineering Lead, Ben is responsible for coordinating team efforts across all subteams, ensuring consistent progress toward major deadlines and competition deliverables. He assigns tasks, facilitates communication between teams, and supports the development of documentation such as the team website and technical design report. His role focuses on maintaining alignment across the project while also contributing to the team’s visual media and presentation materials.",
                    "In his free time, Ben enjoys flying drones, photography, and videography. He is excited to help bring the team’s work together and looks forward to competing in Tulsa, Oklahoma.",
                  ]}
                />
              </section>
              <section className="systems-members">
                <MemberCard
                  image={allison}
                  name="Allison Hongo"
                  role="Systems Member"
                />
                <MemberCard
                  image={michelle}
                  name="Michelle Ramirez"
                  role="Systems Member"
                />
                <MemberCard
                  image={mia}
                  name="Mia Zavala"
                  role="Systems Member"
                />
              </section>
              <div className="systems-about">
                <section className="sys-sec-one">
                  <p>
                    The Systems Engineering subteam is responsible for
                    maintaining alignment across the entire project, ensuring
                    that all subteams progress together and remain consistent
                    with overall objectives. This includes managing schedules,
                    tracking deliverables, maintaining documentation, and
                    overseeing competition requirements such as the technical
                    design report and team website.
                  </p>
                  <img src={[systems2]}></img>
                </section>
                <section className="sys-sec-two">
                  <img src={systems}></img>
                  <p>
                    Their role is critical in preventing disconnects between
                    teams and identifying integration risks early in
                    development. By maintaining visibility across all
                    subsystems, Systems Engineering ensures that design
                    decisions remain compatible and that the final system comes
                    together as intended. The team enables steady progress and
                    coordination, allowing technical work across the project to
                    translate into a cohesive and competition-ready system.
                  </p>
                </section>
              </div>
            </div>
            <div className="advisors-container" id="advisors">
              <h2 className="advisors--title">Advisors/Mentors</h2>
              <div className="advisors">
                <FlipCard
                  image={bhandari}
                  name="Dr. Subodh Bhandari"
                  role="Project Advisor"
                  backText="Dr. Subodh Bhandari is a Professor and Chair of the Aerospace Engineering Department at Cal Poly Pomona. He specializes in autonomous flight control, obstacle avoidance, GPS-denied navigation, and multi-vehicle coordination. His research has been funded by the National Science Foundation and other organizations, and he has led projects in UAV control systems, navigation, and search-and-rescue applications. As the project advisor for the Cal Poly Pomona SUAS (Small Unmanned Aircraft Systems) team, Dr. Bhandari provides expert guidance on UAV design, autonomous systems, and control technologies, helping to drive the team’s progress in developing cutting-edge drone systems for competitions and research projects."
                />
              </div>
              <div className="mentors">
                <MemberCard
                  image={joshuaE}
                  name="Joshua Estrada"
                  role="Software Mentor"
                />
                <MemberCard
                  image={maxG}
                  name="Max Gross"
                  role="Software Mentor"
                />
                <MemberCard image={leoC} name="Leo Chen" role="VIS Mentor" />
                <MemberCard
                  image={mattR}
                  name="Matthew Romero"
                  role="Structures Mentor"
                />
              </div>
            </div>
            <div className="sponsors-container" id="sponsors">
              <h2 className="sponsors--title">Sponsors</h2>
              <img src={lockheed} />
            </div>
          </div>
        </div>
        <section className="team-callout">
          <p className="team-callout__eyebrow">Build Community</p>

          <h2>Great aircrafts are built by great teams.</h2>

          <p>
            Our team brings together students from different engineering
            disciplines to design, build, test, and fly autonomous aerial
            systems. Every member contributes a unique perspective to the
            mission.
          </p>

          <div className="team-callout__line" aria-hidden="true" />
        </section>
      </div>
    </>
  );
}

export default Team;
