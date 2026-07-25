import placeholder from "../assets/picture-placeholder.png";

const astraImages = import.meta.glob("../assets/astra-timeline-img*.png", {
  eager: true,
  import: "default",
});

const astra = Object.entries(
  import.meta.glob("../assets/astra-timeline-img*.png", {
    eager: true,
    import: "default",
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, image]) => image);

let timelineElements = [
  {
    id: 1,
    title: "ASTRA",
    date: "9.06.2025",
    titleDescription: "Project Kickoff Meeting",
    img: astra[0],
    alt: "ASTRA Team",
    description: ` The team’s first meeting of the season established the foundation for the entire project, introducing objectives, team structure, and subteam responsibilities. This event was critical in aligning all members early, ensuring a shared understanding of both the technical goals and how each subteam contributes to the overall system, while also giving the team an opportunity to get to know one another through introductions and casual conversations. Creating this early sense of familiarity and openness helped set a collaborative tone for the year, allowing the team to move forward with both clear direction and strong communication.`,
  },
  {
    id: 2,
    title: "ASTRA",
    date: "09/13-10/04/2025",
    titleDescription: "Review / Retrospective and Onboarding Workshops",
    img: astra[1],
    alt: "ASTRA Team",
    description: `Before the release of the new competition rules, the team focused on reviewing the previous year’s performance while building foundational skills across all subteams. Each session began with an overview of the SUAS competition and past lessons learned, followed by hands-on workshops where subteams developed the skills needed for the season, such as CAD and manufacturing for UAV Design or software setup for Object Recognition. This period was critical in preparing the team early, allowing members to build technical confidence, understand workloads, and establish collaboration within subteams so that development could begin efficiently once the rules were released.`,
  },
  {
    id: 3,
    title: "Object Recognition",
    date: "10/04/2025",
    titleDescription: "Establish Object Detection Algorithm",
    img: astra[2],
    alt: "Object Recognition Object Detection Algorithm",
    description: ` Object Recognition selected YOLO as the team’s primary detection framework after comparing options for accuracy, speed, and real-time performance. Choosing the algorithm early gave the team a clear foundation for model training, testing, and future integration with the mission workflow.`,
  },
  {
    id: 4,
    title: "ASTRA",
    date: "10/09/2025",
    titleDescription: "SUAS 2026 Rules Release",
    img: astra[3],
    alt: "Picture of SUAS rules",
    description: `The release of the SUAS 2026 rules marked the shift from preparation into actual design work, giving the team clear mission requirements, constraints, and scoring criteria to work toward. This was an important step because it grounded all decisions moving forward—subteams could start breaking down the mission, identifying key challenges, and aligning their work to real competition expectations. With defined requirements in place, the team was able to move from general training into focused development, ensuring that time and effort were spent on what actually matters for competition.`,
  },
  {
    id: 5,
    title: "Systems",
    date: "10/11/2025",
    titleDescription: "Detailed Requirements Analysis",
    img: astra[4],
    alt: "ASTRA Team",
    description: `Systems Engineering analyzed the SUAS rules to identify system-level requirements, early tradeoffs, and competition strategy drivers. This work helped turn the handbook requirements into clearer derived requirements that each subteam could use for design and testing.`,
  },

  {
    id: 6,
    title: "Obstacle Avoidance",
    date: "10/11/2025",
    titleDescription:
      "LiDAR Software Repository and Development Plan Established",
    img: astra[5],
    alt: "ASTRA Team",
    description: ` Obstacle Avoidance set up its GitHub workflow and began organizing the software path for LiDAR-based avoidance. Early goals included improving RViz visualization, creating launch files, partitioning point-cloud data, and exploring algorithms that could eventually support autonomous obstacle response.`,
  },

  {
    id: 7,
    title: "UAV Design",
    date: "10/16/2025",
    titleDescription: "Propulsion and Power Systems Research / Analysis Begins",
    img: astra[6],
    alt: "ASTRA Team",
    description: `UAV Design began researching Sentinel’s propulsion and power system, starting the trade process between motor capability, battery capacity, aircraft weight, and flight endurance. Early analysis focused on estimating vehicle weight, understanding how added battery energy also increased mass, and determining the motor performance needed to support the aircraft through future design growth.`,
  },

  {
    id: 8,
    title: "Systems",
    date: "10/18/2025",
    titleDescription: "New Website Development",
    img: astra[7],
    alt: "ASTRA Team",
    description: `Website development for the 2026 season began with Justin and Hope - members from other subteams - working alongside Systems Engineering and project leadership to outline the new ASTRA site. After the 2025 website earned second place, the team set out to build on that success with a more polished, technically detailed website that better documented Sentinel’s development, testing, and competition strategy.`,
  },

  {
    id: 9,
    title: "GNC",
    date: "10/23/2025",
    titleDescription: "Autopilot Research and GCS Configuration",
    img: astra[8],
    alt: "",
    description: `GNC began researching autopilot setup and Ground Control Station operations using the Pixhawk Cube Orange. This early work helped the team understand mission planning, vehicle configuration, and the flight-test responsibilities needed to safely support future manual and autonomous flights.`,
  },

  {
    id: 10,
    title: "Payload",
    date: "10/25/2025",
    titleDescription: "Initial Payload Design",
    img: astra[9],
    alt: "",
    description: `An early concept of the payload system was fully modeled in SolidWorks and prepared for 3D printing and testing. This marked the beginning of the design iteration process, where the mechanism would be tested, evaluated, and improved until a functional solution was achieved.`,
  },

  {
    id: 11,
    title: "Object Recognition",
    date: "10/25/2025",
    titleDescription: "Initial Training Dataset Created",
    img: astra[10],
    alt: "",
    description: `Object Recognition began building the first training dataset for the YOLO model using images of the competition target classes. This gave the team an early baseline for detection performance and helped identify what types of images, angles, and environments were missing from the dataset.`,
  },

  {
    id: 12,
    title: "Obstacle Avoidance",
    date: "10/25/2025",
    titleDescription: "Microcontroller Trade Study Complete",
    img: astra[11],
    alt: "",
    description: `Obstacle Avoidance evaluated microcontroller options for handling LiDAR data and MAVLink communication. The team compared requirements such as floating-point capability, UART availability, clock speed, USB programming, and ease of integration before moving forward with a Raspberry Pi Pico 2-based approach.`,
  },

  {
    id: 13,
    title: "UAV Design",
    date: "11/1/2025",
    titleDescription: "Frame Configuration Options Developed",
    img: astra[12],
    alt: "",
    description: ` UAV Design developed several frame configuration options for Sentinel, comparing different layouts before selecting the final aircraft architecture. This early trade study helped the team evaluate stability, payload space, propulsion layout, integration needs, and overall mission fit before committing to a build direction.`,
  },

  {
    id: 14,
    title: "Systems",
    date: "11/06/2025",
    titleDescription: "Successful Conceptual Design Review",
    img: astra[13],
    alt: "",
    description: `The Systems Engineering team coordinated and delivered ASTRA’s Conceptual Design Review to Lockheed Martin representatives, presenting the team’s initial vehicle concept, subsystem approach, and SUAS mission strategy. The review resulted in positive and constructive feedback, continued sponsorship approval, and confirmation that the team’s design direction was ready to move forward.`,
  },

  {
    id: 15,
    title: "Object Recognition",
    date: "11/08/2025",
    titleDescription: "First Object Detection Model Trained",
    img: astra[14],
    alt: "",
    description: `Object Recognition trained the first working YOLO model for the competition target classes: human / mannequin and tent. Although the model was still early, it gave the team a usable baseline for testing detections, measuring accuracy, and guiding future data collection.`,
  },

  {
    id: 16,
    title: "UAV Design",
    date: "11/12/2025",
    titleDescription: "Static Motor Tests",
    img: astra[15],
    alt: "",
    description:
      "UAV Design began static motor testing to compare expected propulsion performance against real measured behavior. These tests helped the team better understand thrust output, current draw, and motor response, giving early data to support later propulsion sizing and vehicle weight estimates.",
  },

  {
    id: 17,
    title: "GNC",
    date: "11/15/2025",
    titleDescription: "Initial Electrical Design Phase",
    img: astra[16],
    alt: "",
    description:
      "GNC began planning Sentinel’s electrical system after researching the power needs of the new aircraft. Early design work focused on supporting the custom 6S Li-Ion battery packs while supplying power to key components such as the telemetry system, Pixhawk flight controller, and Jetson Orin Nano.",
  },

  {
    id: 18,
    title: "Obstacle Avoidance",
    date: "11/17/2025",
    titleDescription: "SITL Setup Success and Documentation",
    img: astra[17],
    alt: "",
    description:
      "Obstacle Avoidance documented the setup process for connecting ROS-based development to SITL and ArduPilot simulation. This helped make the workflow easier for other members to reproduce and supported continued work on simulation, MAVROS setup, and future integration testing.",
  },

  {
    id: 19,
    title: "GNC",
    date: "11/17/2025",
    titleDescription: "Telemetry and R.C. Changes",
    img: astra[18],
    alt: "",
    description:
      "GNC selected upgraded telemetry and radio control components to improve signal strength, range, and reliability. The team chose a 900 MHz Yagi antenna for stronger GCS-to-aircraft telemetry and a Tandem X18 dual-band R.C. controller to support longer-range flight and faster pilot response during testing.",
  },
  {
    id: 20,
    title: "UAV Design",
    date: "11/20/ 2025",
    titleDescription: "Detailed Modeling of Final Configuration",
    img: astra[19],
    alt: "",
    description:
      "UAV Design moved into detailed modeling of Sentinel’s selected configuration, turning the early frame concept into a more complete aircraft layout. This work helped define component placement, structural spacing, payload integration, and the overall geometry needed for the final build.",
  },

  {
    id: 21,
    title: "Payload",
    date: "11/22/2025",
    titleDescription: "First Drop Tests",
    img: astra[20],
    alt: "",
    description:
      "A fully 3D-printed payload model was created with car keys put inside to simulate weight, along with a parachute canopy made from bedcloth to test early design concepts. This prototype helped the team evaluate initial performance and identify which payload components were reliable enough to continue improving.",
  },

  {
    id: 22,
    title: "Object Recognition",
    date: "11/22/2025",
    titleDescription: "Full System Simulation",
    img: astra[21],
    alt: "",
    description:
      "Object Recognition completed an early mission simulation of the detection and payload workflow. In the simulation, the system identified the target object, moved to the correct location, triggered the payload drop sequence, and continued through the mission. This confirmed the overall software logic before moving into flight-based testing.",
  },

  {
    id: 23,
    title: "GNC",
    date: "12/05/2025",
    titleDescription: "Bus Bar Finalized",
    img: astra[22],
    alt: "",
    description:
      "GNC finalized a new bus bar solution for Sentinel’s high-current power system. The selected part met the aircraft’s current-handling needs while reducing the original electrical weight estimate by approximately two pounds, making it a major improvement for both power distribution and overall vehicle weight.",
  },

  {
    id: 24,
    title: "Obstacle Avoidance",
    date: "12/13/2025",
    titleDescription: "LiDAR Interface Hardware Tested",
    img: astra[23],
    alt: "",
    description:
      "Obstacle Avoidance assembled and tested prototype interface hardware for the LiDAR system. The team soldered Pico-based boards, verified the connections with a multimeter, and confirmed the setup could operate with the LiDAR, moving the system closer to physical integration.",
  },

  {
    id: 25,
    title: "UAV Design",
    date: "12/15/2025",
    titleDescription: "Selected Final Motors, ESC's, and Propellers",
    img: astra[24],
    alt: "",
    description:
      "UAV Design selected the final motors, ESCs, and propellers for Sentinel after comparing propulsion performance, weight, power draw, and integration needs. This decision established the core propulsion package for the aircraft and allowed the team to move forward with detailed layout, power planning, and build preparation.",
  },

  {
    id: 26,
    title: "Payload",
    date: "12/19/2025",
    titleDescription: "Payload Prototyping",
    img: astra[25],
    alt: "",
    description:
      "Additional components were prototyped and assembled to develop a functional payload release mechanism for the drone. All parts were 3D printed and fastened together with screws, helping the team establish a working payload drop system.",
  },

  {
    id: 27,
    title: "GNC",
    date: "01/06/2026",
    titleDescription: "Main Electrical System Finalized",
    img: astra[26],
    alt: "",
    description:
      "GNC finalized the main electrical system components responsible for distributing power from the batteries to Sentinel’s major subsystems. Key selections included a high-current anti-spark switch and the SmartAP PDB, which provided voltage regulation, power conversion, and current sensing in a compact integrated package.",
  },

  {
    id: 28,
    title: "Payload",
    date: "01/15/2026",
    titleDescription: "Electonics Integration",
    img: astra[27],
    alt: "",
    description:
      "Electronics were integrated into the payload system to enable a delayed parachute release after the mechanical parachute release mechanism was successfully tested.",
  },

  {
    id: 29,
    title: "UAV Design",
    date: "01/15/2026",
    titleDescription: "Finalizing Propulsion Layout",
    img: astra[28],
    alt: "",
    description:
      " UAV Design finalized the propulsion layout for Sentinel, including the placement and arrangement of the motors, propellers, and supporting structure. This milestone helped lock in the aircraft’s flight configuration and gave the team a clearer path for wiring, mounting, weight balance, and full-vehicle integration.",
  },

  {
    id: 30,
    title: "Object Recognition",
    date: "01/24/2026",
    titleDescription: "Detection Model Runs on Onboard Computer",
    img: astra[29],
    alt: "",
    description:
      "Object Recognition successfully ran the detection model on the onboard computing hardware, confirming that the system could process images in the same type of environment planned for competition. This helped move the model from desktop testing toward flight-ready integration.",
  },

  {
    id: 31,
    title: "Obstacle Avoidance",
    date: "01/31/2026",
    titleDescription: "LiDAR Data Displayed in Mission Planner",
    img: astra[30],
    alt: "",
    description:
      "Obstacle Avoidance reached a major integration milestone by displaying LiDAR-based obstacle data through Mission Planner. This showed that the sensor and communication workflow were beginning to connect with the ground-control environment, giving the team a path toward practical testing.",
  },

  {
    id: 32,
    title: "ASTRA",
    date: "01/31/2026",
    titleDescription: "Official Registration Submittal",
    img: astra[31],
    alt: "",
    description:
      "ASTRA completed official registration for SUAS 2026 by submitting the initial team information and paying the registration fee. This confirmed the team’s place in the competition and marked the start of work toward the official deliverables, including the flight readiness video, design report, team website, and mission demonstration.",
  },

  {
    id: 33,
    title: "UAV Design",
    date: "02/07/2026",
    titleDescription: "Integrated Structural and Electrical Wiring Models",
    img: astra[32],
    alt: "",
    description: "",
  },

  {
    id: 34,
    title: "Payload",
    date: "02/14/2026",
    titleDescription: "4 Servo Release Mechanism",
    img: astra[33],
    alt: "",
    description:
      "The four-servo release mechanism achieved successful functionality, allowing the team to begin integrated testing of the complete payload system.",
  },

  {
    id: 35,
    title: "Object Recognition",
    date: "02/14/2026",
    titleDescription: "Camera Pipeline Integrated",
    img: astra[34],
    alt: "",
    description:
      "Object Recognition integrated the camera pipeline needed to capture and process aerial imagery for target detection. This milestone connected image collection, model inference, and output generation into a workflow that could later support Sentinel’s autonomous mission tasks.",
  },
  {
    id: 36,
    title: "GNC",
    date: "02/21/2026",
    titleDescription: "Custom Battery Making for Sentinel",
    img: astra[36],
    alt: "Custom Sentinel battery packs",
    description: "GNC completed construction of all nine custom 6S Li-Ion battery packs for Sentinel. The process required careful spot welding, soldering, and inspection to ensure secure electrical connections and reduce the risk of shorts during future ground and flight testing.",
  },
  {
    id: 37,
    title: "UAV Design",
    date: "02/24/2026",
    titleDescription: "Assembly Begins",
    img: astra[37],
    alt: "Sentinel assembly",
    description: "UAV Design began assembly after the carbon fiber plates arrived from the manufacturer. With the main frame parts in hand, the team could start mounting components to Sentinel and move from design and planning into the physical build.",
  },
  {
    id: 38,
    title: "Payload",
    date: "02/28/2026",
    titleDescription: "Spring Integration",
    img: astra[35],
    alt: "Payload parachute spring integration",
    description: "The parachute deployment system required additional force to release quickly and reliably. To improve deployment speed, a spring mechanism was integrated into the cap to help push the parachute out upon activation.",
  },

  {
    id: 39,
    title: "Object Recognition",
    date: "03/07/2026",
    titleDescription: "Full System Simulation Through Mission Planner",
    img: astra[38],
    alt: "Object Recognition Mission Planner simulation",
    description: "Object Recognition tested the mission workflow through Mission Planner using SITL and HITL simulation. This allowed the team to validate detection logic, communication, and autonomous behavior in a more realistic environment before relying on live flight testing.",
  },
  {
    id: 40,
    title: "Obstacle Avoidance",
    date: "03/07/2026",
    titleDescription: "L2 LiDAR Visualization in RViz",
    img: astra[39],
    alt: "LiDAR data in RViz",
    description: "Obstacle Avoidance successfully visualized L2 LiDAR data in RViz, confirming that the updated sensor model could produce usable point-cloud data. This helped the team validate the sensor setup before moving deeper into simulation and flight-test preparation.",
  },
  {
    id: 41,
    title: "GNC",
    date: "03/09/2026",
    titleDescription: "Main DC Wire Soldering Finished",
    img: astra[40],
    alt: "Sentinel DC power wiring",
    description: "GNC completed Sentinel's major DC power wiring, including connections between the bus bars, power switch, PDB, and individual ESCs. This milestone allowed the team to begin electrical static testing and verify that the power system was secure before flight.",
  },
  {
    id: 42,
    title: "Payload",
    date: "03/12/2026",
    titleDescription: "Release Mechanism Integrated Drop Testing",
    img: astra[41],
    alt: "Payload release mechanism drop test",
    description: "The payload release mechanism was successfully integrated with the parachute deployment system. During testing, the payload is released by pressing a button, which pulls a wire connection and activates a timer that triggers parachute deployment.",
  },
  {
    id: 43,
    title: "Systems",
    date: "03/12/2026",
    titleDescription: "Successful Preliminary Design Review",
    img: astra[42],
    alt: "ASTRA Preliminary Design Review",
    description: "The Systems Engineering team coordinated and delivered ASTRA's Preliminary Design Review to Lockheed Martin engineers and technical advisors, with 8 team representatives presenting updated subsystem progress, requirements tracking, and early test results. The review showed major development since CoDR and provided feedback to guide the next phase of integration.",
  },
  {
    id: 44,
    title: "Payload",
    date: "03/14/2026",
    titleDescription: "First Successful Payload Drop Test from 12S",
    img: astra[43],
    alt: "Payload drop test",
    description: "The payload was successfully released from the drone at 33 m and the parachute deployed as intended, allowing the payload to land safely on the ground. This test validated the release and deployment mechanism that had been successfully demonstrated two days earlier.",
  },
  {
    id: 45,
    title: "GNC",
    date: "03/19/2026",
    titleDescription: "Voltage/Current Telemetry Configured",
    img: astra[44],
    alt: "Sentinel voltage and current telemetry",
    description: "GNC configured the PDB's embedded voltage and current sensing for real-time power monitoring. This gave the team visibility into Sentinel's battery usage and electrical performance during ground checks and flight testing.",
  },
  {
    id: 46,
    title: "Object Recognition",
    date: "03/21/2026",
    titleDescription: "Successful Flight Test of Object Detection and Flight Control Integration",
    img: astra[45],
    alt: "Object detection and flight control test",
    description: "Object Recognition successfully demonstrated integration between the detection system and flight control workflow using a test drone. The aircraft responded dynamically over competition objects, confirming that perception outputs could be connected to mission behavior before the system was later transitioned toward Sentinel.",
  },
  {
    id: 47,
    title: "Systems",
    date: "03/12/2026",
    titleDescription: "TDR and Detailed Website Work Begins",
    img: astra[46],
    alt: "ASTRA technical design report and website work",
    description: "Systems Engineering began detailed work on the TDR and team website content, building from the website structure already started by the software team. The TDR outline was shaped using feedback from last year's submission and examples from top-performing teams, helping align the team's documentation with competition expectations.",
  },
  {
    id: 48,
    title: "UAV Design",
    date: "03/26/2026",
    titleDescription: "Assembly Completed",
    img: astra[47],
    alt: "Completed Sentinel assembly",
    description: "UAV Design completed Sentinel's main assembly after the aluminum arms arrived and the remaining structure could be installed. With the frame fully assembled and major components mounted, the aircraft was ready to move into final checks, wiring cleanup, and flight testing.",
  },
  {
    id: 49,
    title: "ASTRA",
    date: "03/30/2026",
    titleDescription: "Sentinel's First Manual Flight",
    img: astra[48],
    alt: "Sentinel first manual flight",
    description: "Sentinel completed its first manual flight, proving that the aircraft could safely take off, hover, maneuver, and land under pilot control. This test gave the team its first real flight data on stability, handling, and propulsion performance, and cleared the path for autonomous flight testing.",
  },
  {
    id: 50,
    title: "ASTRA",
    date: "03/31/2026",
    titleDescription: "Sentinel's First Autonomous Flight",
    img: astra[49],
    alt: "Sentinel first autonomous flight",
    description: "Sentinel completed its first autonomous flight just one day after its first manual flight. After seeing how stable the aircraft was in manual control, the team was able to move into autonomous testing sooner than expected. The flight showed that the vehicle, Pixhawk, GPS, and mission-planning setup were already working together well early in the test campaign.",
  },
  {
    id: 51,
    title: "Systems",
    date: "04/05/2026",
    titleDescription: "Proof of Flight Video Complete",
    img: astra[50],
    alt: "Proof of Flight video",
    description: "Systems Engineering completed ASTRA's Proof of Flight video, bringing together flight footage, safety information, mission-readiness evidence, and team documentation into the required submission format. This milestone marked the team's first major competition deliverable of the season and prepared the video for official review.",
  },  {
    id: 52,
    title: "ASTRA",
    date: "04/07/2026",
    titleDescription: "Proof of Flight Video Acceptance",
    img: astra[51],
    alt: "Proof of Flight acceptance",
    description: "ASTRA's Proof of Flight Readiness video was accepted, securing 3rd place in the competition flight order. Since earlier accepted teams are prioritized for mission attempts, this gave the team a better position for flying at competition and for a possible second run if the schedule allows.",
  },
  {
    id: 53,
    title: "Obstacle Avoidance",
    date: "04/10/2026",
    titleDescription: "Static LiDAR Flight Test",
    img: astra[52],
    alt: "Static LiDAR flight test",
    description: "Obstacle Avoidance completed a static off-board LiDAR test using a test drone. The team created test documentation, reviewed relevant Pixhawk parameters, and conducted a small mission to evaluate the system before moving toward more advanced integration.",
  },
  {
    id: 54,
    title: "Object Recognition",
    date: "04/25/2026",
    titleDescription: "Began Competition Configuration Data Collection",
    img: astra[53],
    alt: "Competition-style object recognition data collection",
    description: "Object Recognition began collecting competition-style aerial imagery of humans and tents to improve model training. Using realistic altitude, viewing angles, lighting, and outdoor conditions, the team refined the YOLO model and improved detection accuracy from 71% to 94%, strengthening the system for Sentinel's mission needs.",
  },
  {
    id: 55,
    title: "Payload",
    date: "05/01/2026",
    titleDescription: "Beacon Payload Fully Assembled",
    img: astra[54],
    alt: "Beacon payload",
    description: "The beacon payload was designed to deploy using the same release method as the water bottle payload. All required components were 3D printed and assembled to create the team's second payload system.",
  },
  {
    id: 56,
    title: "GNC",
    date: "05/02/2026",
    titleDescription: "Full-Scale Autonomous Testing",
    img: astra[55],
    alt: "Full-scale autonomous testing",
    description: "Sentinel completed a 15-minute autonomous mission supporting object detection and mapping tests. GNC led the mission-planning and navigation setup, ensuring the autopilot parameters were ready for the endurance flight and using Pixhawk logs afterward to evaluate aircraft performance and guide future improvements.",
  },
  {
    id: 57,
    title: "Payload",
    date: "05/18/2026",
    titleDescription: "Barometer Testing",
    img: astra[56],
    alt: "Payload barometer testing",
    description: "To create a reliable parachute release mechanism that would not deploy while still attached to the drone, the team added multiple safety checks to ensure the parachute only opened after the payload was dropped. A barometer was integrated into the electronics system to monitor altitude and help determine when parachute deployment should occur.",
  },
  {
    id: 58,
    title: "Payload",
    date: "05/31/2026",
    titleDescription: "Accelerometer Testing",
    img: astra[57],
    alt: "Payload accelerometer testing",
    description: "After barometer testing proved unsuccessful, the team switched to an accelerometer-based safety check to detect free fall after payload release. Once free fall is detected, the system starts a timer to control parachute deployment. This approach improved the safety and reliability of the parachute release system while allowing deployment to occur closer to the ground.",
  },
  {
    id: 59,
    title: "GNC",
    date: "06/06/2026",
    titleDescription: "Autonomous Speed Limit Testing",
    img: astra[58],
    alt: "Autonomous speed limit testing",
    description: "GNC began speed limit testing to better understand how aggressively Sentinel could fly during competition. The team tested different straightaway speeds, waypoint radii, turn geometry, and battery failsafe settings. These tests showed that Sentinel could reach over 12 m/s in autonomous flight while revealing important turning, voltage-sag, and RTL limits for competition mission planning.",
  },
  {
    id: 60,
    title: "Obstacle Avoidance",
    date: "06/06/2026",
    titleDescription: "Obstacle Avoidance Functionality Confirmed",
    img: astra[59],
    alt: "Obstacle avoidance flight test",
    description: "Obstacle Avoidance confirmed the system was working as expected during in-flight testing on a test drone. With the avoidance behavior validated in flight, the subsystem moved out of troubleshooting and became ready for integration onto Sentinel once the team approved installation on the competition aircraft.",
  },
  {
    id: 61,
    title: "Payload",
    date: "06/13/2026",
    titleDescription: "First Fully Integrated Object Recognition and Payload Test",
    img: astra[60],
    alt: "Integrated object recognition and payload test",
    description: "Payload completed the first fully integrated test between object recognition and the payload release system. This test connected target detection with the delivery workflow, showing that the team was moving beyond individual subsystem testing and toward a mission-like payload drop sequence.",
  },

  {
    id: 62,
    title: "Object Recognition",
    date:"6/13/2026",
    titleDescription: "First Fully Integrated Object Recognition and Payload Test",
    img: astra[60],
    alt: "Integrated object recognition and payload test",
    description: "Object Recognition completed the first fully integrated test between object recognition and the payload release system. This test connected target detection with the delivery workflow, showing that the team was moving beyond individual subsystem testing and toward a mission-like payload drop sequence.",
  },

  {
    id: 63,
    title: "ASTRA",
    date: "Unknown",
    titleDescription: "Final Registration Information Submitted",
    img: astra[61],
    alt: "Final competition registration",
    description: "ASTRA submitted the remaining competition registration materials ahead of the July 29 deadline, including final team, vehicle, on-site, and design documentation information. This step closed out the administrative side of competition preparation and confirmed that the team was ready to move forward with final competition preparations.",
  },
  {
    id: 64,
    title: "ASTRA",
    date: "Unknown",
    titleDescription: "Began Full Mission Testing",
    img: astra[62],
    alt: "Full mission testing",
    description: "ASTRA began full mission testing, from setup to teardown, to practice the competition sequence with multiple subsystems working together. These tests brought together autonomous flight, mission planning, mapping, object recognition, and payload delivery workflows, helping the team identify what still needed tuning before competition.",
  },
];
export default timelineElements;
