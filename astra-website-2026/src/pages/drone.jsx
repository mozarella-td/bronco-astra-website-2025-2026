import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, useProgress } from "@react-three/drei";

import '../styles/index.css';
import '../styles/drone.css';

// Vite will process imported assets, so use a relative import from the src/pages folder.
import modelPath from "../assets/UAVD_3D_Model_2026_Simplified.glb";

import payloadImage1 from "../assets/Drone/Payload_1.jpg";
import payloadImage2 from "../assets/Drone/Payload_2.jpg";
import payloadImage3 from "../assets/Drone/Payload_3.jpg";
import payloadImage4 from "../assets/Drone/Payload_4.jpg";
import batteryImage1 from "../assets/Drone/Battery_1.jpg";
import batteryImage2 from "../assets/Drone/Battery_2.jpg";
import batteryImage3 from "../assets/Drone/Battery_3.jpg";
import batteryImage4 from "../assets/Drone/Battery_4.jpg";
import propulsionImage1 from "../assets/Drone/Propulsion_2.jpg";
import propulsionImage2 from "../assets/Drone/Propulsion_1.jpg";
import propulsionImage3 from "../assets/Drone/Propulsion_3.jpg";
import propulsionImage4 from "../assets/Drone/Propulsion_4.jpg";
import structureImage1 from "../assets/Drone/Structure_1.jpg";
import structureImage2 from "../assets/Drone/Structure_2.jpg";
import structureImage3 from "../assets/Drone/Structure_3.jpg";
import structureImage4 from "../assets/Drone/Structure_4.jpg";
import softwareImage1 from "../assets/Drone/Software_1.jpg";
import softwareImage2 from "../assets/Drone/Software_2.jpg";
import softwareImage3 from "../assets/Drone/Software_3.jpg";
import softwareImage4 from "../assets/Drone/Software_4.jpg";
import softwareImage5 from "../assets/Drone/Software_5.jpg";
import softwareImage6 from "../assets/Drone/Software_6.jpg";
import softwareImage7 from "../assets/Drone/Software_7.jpg";
import softwareImage8 from "../assets/Drone/Software_8.jpg";
import avionicsImage1 from "../assets/Drone/Avionics_1.jpg";
import avionicsImage2 from "../assets/Drone/Avionics_2.jpg";
import avionicsImage3 from "../assets/Drone/Avionics_3.jpg";
import avionicsImage4 from "../assets/Drone/Avionics_4.jpg";
import avionicsImage5 from "../assets/Drone/Avionics_5.jpg";
import avionicsImage6 from "../assets/Drone/Avionics_6.jpg";
import avionicsImage7 from "../assets/Drone/Avionics_7.jpg";
import avionicsImage8 from "../assets/Drone/Avionics_8.jpg";
import avionicsImage9 from "../assets/Drone/Avionics_9.jpg";
import avionicsImage10 from "../assets/Drone/Avionics_10.jpg";
import avionicsImage11 from "../assets/Drone/Avionics_11.jpg";

useGLTF.preload(modelPath);

const FADE_IN_SECONDS = 0.8;

function Model(props) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();
  const fade = useRef(0);

  // Materials load fully opaque; start them invisible so the model can ease
  // in instead of popping into view the instant it finishes loading.
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.transparent = true;
        child.material.opacity = 0;
      }
    });
    fade.current = 0;
  }, [scene]);

  // Keep the drone spinning slowly on its own; PresentationControls still lets
  // a visitor drag to tilt/inspect it without fighting this rotation.
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.35;

    if (fade.current < 1) {
      fade.current = Math.min(1, fade.current + delta / FADE_IN_SECONDS);
      scene.traverse((child) => {
        if (child.isMesh) child.material.opacity = fade.current;
      });
    }
  });

  return <primitive ref={ref} object={scene} scale={0.01} {...props} />
}

function Loader() {
  const { progress, active } = useProgress();

  return (
    <div className={`drone-loader${active ? "" : " drone-loader--hidden"}`}>
      <div className="drone-loader__track">
        <div className="drone-loader__bar" style={{ width: `${progress}%` }} />
      </div>
      <span className="drone-loader__label">Loading model… {Math.round(progress)}%</span>
    </div>
  );
}

// Placeholder copy/images — swap in the real title, description, and image
// for each subsystem section once they're ready. Each section's `images` array
// drives how many alternating image/text rectangles its grid shows (one text
// cell per image) — sized to how much real photo content that subsystem has,
// so a section with only a couple photos doesn't get padded out with repeats.
// `texts` holds the copy for those text rectangles, one string per image, in
// the same order — edit each entry here to change what a given cell says.
const DRONE_SECTIONS = [
  {
    image: payloadImage1,
    images: [payloadImage2, payloadImage3, payloadImage4],
    texts: [
      "Payload Casings: The payload casings securely house the water bottle and strobing beacon during flight while protecting each object from vibration, aerodynamic loads, and impact. Each casing is designed to interface with Sentinel’s drop mechanism and parachute system, allowing the payload to remain firmly retained until release. The lightweight structure also supports accurate deployment without creating unnecessary weight or drag.",
      "Drop Mechanism: The drop mechanism controls the release of each payload from Sentinel. Separate retention points allow the aircraft to carry both mission objects and deploy the correct payload after the corresponding target has been identified. When commanded, the mechanism retracts the retaining pin and allows the selected casing to separate cleanly from the aircraft while minimizing disturbances to flight stability.",
      "Parachute Release Mechanism: The parachute release mechanism controls the safe deployment of the payload’s descent system after separation from Sentinel. A servo-operated restraint holds the parachute inside the casing during flight, while a spring-loaded pressure plate actively pushes it outward when deployment is commanded. This controlled sequence helps prevent premature opening, reduces the risk of entanglement, and slows the payload before landing near the target.",
    ],
    title: "PAYLOAD",
    description: "The payload system enables Sentinel to autonomously deliver mission supplies to detected targets within the search area. Separate delivery assemblies carry an eight-ounce water bottle for the mannequin and a strobing beacon for the tent. Each payload incorporates a controlled release and descent system designed to protect the delivery object, maintain flight stability, and support accurate placement near the identified target.",
  },
  {
    image: batteryImage1,
    images: [batteryImage2, batteryImage3, batteryImage4],
    texts: [
      "Battery Connectors - AMASS XT60H Connectors: XT60H connectors were installed between the individual battery packs and Sentinel’s main power system. Their polarized housings help prevent reverse-polarity connections, while the insulated covers protect the solder joints. The removable connection also simplifies battery installation and replacement.",
      "Battery Power Distribution - JAG35 DC PowerStrip: The JAG35 DC PowerStrip was used to connect Sentinel’s nine battery packs in parallel before supplying power to the aircraft. Its populated XT60 connections provide a compact and removable interface for each pack, while the shared output combines their capacity at the required system voltage.",
      "Overall Specifications of Custom Battery: Sentinel’s battery system was assembled from nine 6S battery packs connected in parallel. Each pack provides 21.6 V, 4.5 Ah, and 97.2 Wh. The parallel configuration increases total capacity while maintaining the aircraft’s required 6S operating voltage.",
    ],
    title: "BATTERY",
    description: "The battery system provides reliable power for Sentinel’s propulsion, avionics, onboard computing, sensing, and payload systems throughout the mission. The selected configuration balances usable energy, current capability, weight, and thermal safety to support extended autonomous flight without requiring an in-mission battery change or recharge.",
  },
  {
    image: propulsionImage2,
    images: [propulsionImage1, propulsionImage3, propulsionImage4],
    texts: [
      "Motors - MAD 5015 IPE (320 kV): Sentinel uses four MAD 5015 IPE V3.0 motors to provide the propulsion capabilities required for autonomous flight and payload delivery. The 320KV variant was selected for compatibility with the drone’s 6S battery system and 20.2-inch propellers. Each motor supports up to 8.6 kg of maximum thrust, providing sufficient lift and control authority while reducing propulsion-system weight compared with the previous motors.",
      "Electronic Speed Controllers - MAD AMPX 60A: The electronic speed controllers were connected between Sentinel’s power system and motors to regulate power delivery and precisely control motor speed. They allow the flight controller to make rapid adjustments in thrust for stable and responsive flight. The 60A ESCs were selected for compatibility with the MAD motors and the drone’s 6S battery configuration.",
      "Propellers - 20.2 × 6.6-Inch FLUXER Pro: The propellers work with the motors to generate the thrust required for flight. These propellers were selected because their 20.2-inch diameter is compatible with the MAD motor configuration and their carbon-fiber construction provides high stiffness at a low weight. The folding design also reduces Sentinel’s footprint during transportation and setup.",
    ],
    title: "PROPULSION",
    description: "Sentinel’s propulsion system generates the thrust required for stable takeoff, autonomous waypoint flight, search operations, payload delivery, and landing. Its motors, propellers, and electronic speed controllers are selected and integrated to balance thrust margin, energy efficiency, thermal performance, and precise control while operating within the competition’s weight and flight-performance limits.",
  },
  {
    image: structureImage1,
    images: [structureImage2, structureImage3, structureImage4],
    texts: [
      "Leg Rods and Main Plates - Carbon Fiber: Sentinel’s main structural plates were manufactured from carbon fiber by an external company using drawings developed by the UAV Design Team, while the landing legs were manufactured in-house. Together, these components form the primary lightweight structure of the aircraft, provide mounting support for major subsystems, and maintain clearance beneath the frame during takeoff and landing. Carbon fiber was selected for its high strength-to-weight ratio and structural stiffness.",
      "Motor Arms - Aluminum Rods: The motor arms were manufactured from aluminum to provide increased strength and durability between the central frame and propulsion system. Each arm supports a motor, propeller, and associated wiring while transferring propulsion loads into the main carbon-fiber plates. Aluminum was selected to reduce the risk of arm failure under bending, vibration, and hard-landing loads.",
      "3D-Printed Casings and Hardware Mounts - PLA or PC: The battery casings and hardware mounts were designed by the UAV Design Team and manufactured in-house using fused-filament 3D printing. Polylactic acid (PLA) was used for lower-load components, while polycarbonate (PC) was used where greater strength or temperature resistance was required. These custom parts secure Sentinel’s batteries, avionics, sensors, and supporting hardware while allowing each component to integrate with the airframe.",
    ],
    title: "STRUCTURE",
    description: "Sentinel’s airframe provides a lightweight and rigid platform for the propulsion, battery, avionics, sensing, and payload systems. The structure is designed to remain within the competition’s 35-pound maximum flight weight while supporting rapid assembly, secure subsystem mounting, manageable transportation, and durability throughout repeated autonomous flight and payload-delivery operations.",
  },
  {
    image: softwareImage1,
    images: [softwareImage2, softwareImage3, softwareImage4, softwareImage5, softwareImage6, softwareImage7, softwareImage8],
    texts: [
      "Ground Control Station - Mission Planner: Mission Planner was used as the primary interface between Sentinel and the ground team. It allowed the team to upload autonomous mission parameters, monitor real-time telemetry, and issue manual commands when required. Operators could view the drone’s position, battery status, GPS quality, altitude, ground speed, and other critical flight information throughout the mission.",
      "Object Detection Model - YOLOv26: YOLO26 was used as Sentinel’s object-detection model for identifying the mannequin and tent within the search boundary. The model processes imagery from the downward-facing camera and returns detection data that support target localization and selection of the corresponding water bottle or beacon payload. Its edge-optimized architecture is well suited for real-time processing on onboard computing hardware.",
      "Autopilot Firmware - ArduPilot: ArduPilot provides the flight-control software running on Sentinel’s Pixhawk flight controller. It manages stabilization, waypoint navigation, flight modes, failsafes, return-to-launch behavior, and communication with Mission Planner through MAVLink.",
      "Model Development Framework - PyTorch: PyTorch was used to train and evaluate Sentinel’s YOLO26 object-detection model before deployment. It supports custom dataset training, model validation, and experimentation with the architecture and image-processing workflow. ● Supports custom neural-network training ●	Provides GPU-accelerated model development ●	Enables model evaluation and performance tuning ●	Supports export to optimized deployment formats",
      "Inference Optimization - NVIDIA TensorRT: TensorRT was used to optimize Sentinel’s trained object-detection model for deployment on the onboard NVIDIA Jetson. The optimized inference engine reduces latency and GPU-memory usage, allowing captured images to be processed more efficiently during flight. ●	Optimizes trained models for NVIDIA GPUs ●	Reduces inference latency ●	Lowers GPU-memory usage ●	Supports layer and tensor fusion ●	Improves onboard object-detection performance",
      "Robotics Middleware - ROS (Robot Operating System): ROS was used to support communication between Sentinel’s perception, navigation, simulation, and onboard processing systems. Its modular framework allowed the team to exchange sensor data, coordinate software processes, and test individual functions before full-system integration. ●	Handles message passing between software nodes ●	Supports LiDAR and camera-data processing ●	Integrates perception and navigation functions ●	Enables modular debugging and simulation ●	Supports expansion and future software upgrades",
      "Simulation Environment - Gazebo: Gazebo was used to test Sentinel’s autonomous navigation and obstacle-avoidance software in a controlled virtual environment. The platform allowed the team to simulate aircraft movement, sensor behavior, and environmental obstacles before conducting physical flight testing. ●	Simulates three-dimensional environments ●	Models aircraft and sensor behavior ●	Supports autonomous-navigation testing ●	Integrates with ROS for software validation ●	Enables repeatable testing without physical flight",
    ],
    title: "SOFTWARE",
    description: "Sentinel’s software stack coordinates autonomous flight, mission planning, risk mapping, target detection, payload delivery, and communication between the aircraft and Ground Control Station. It processes navigation and sensor data in real time, identifies mission-relevant objects within the search area, records their locations, and supports autonomous decisions while maintaining safety-pilot and operator override capabilities.",
  },
  {
    image: avionicsImage1,
    images: [avionicsImage2, avionicsImage3, avionicsImage4, avionicsImage5, avionicsImage6, avionicsImage7, avionicsImage8, avionicsImage9, avionicsImage10, avionicsImage11],
    texts: [
      "Flight Controller - CubePilot Cube Orange+: The Cube Orange+ was installed as Sentinel’s primary flight controller. It processes navigation and sensor data, stabilizes the aircraft, executes autonomous waypoint missions, and communicates with the Ground Control Station. Its redundant inertial sensors and failsafe processor improve reliability during autonomous operations. ●	Supports autonomous and manual flight modes ●	Includes redundant accelerometers and gyroscopes ●	Provides dual barometric pressure sensors ●	Supports CAN, serial, I²C, SPI, and PWM interfaces ●	Includes a dedicated failsafe processor",
      "Onboard Computer - NVIDIA Jetson Orin Nano Super: The Jetson Orin Nano Super was installed as Sentinel’s onboard companion computer. It processes camera and LiDAR data, runs the YOLO26 object-detection model, and supports the perception and autonomy software used during the mission. Its GPU accelerates AI inference without relying on an external computer or cloud service. ●	Provides up to 67 TOPS of AI performance ●	Includes a 1024-core NVIDIA Ampere GPU ●	Uses a six-core Arm Cortex-A78AE processor ●	Includes 8 GB of LPDDR5 memory ●	Operates within a configurable 7–25 W power range",
      "3D LiDAR Sensor - Unitree 4D LiDAR L1: The Unitree L1 was installed as Sentinel’s obstacle-detection sensor. It produces three-dimensional point-cloud data around the aircraft, allowing the onboard computer to detect surrounding objects and support autonomous obstacle-avoidance development. ●	Provides a 360° horizontal field of view ●	Provides a 90° vertical field of view ●	Detects objects at ranges up to approximately 30 m ●	Generates up to 21,600 effective points per second ●	Includes an integrated inertial measurement unit",
      "Gimbal Camera - SIYI ZR30: The SIYI ZR30 was installed as Sentinel’s primary imaging system for object detection and aerial data collection. Its three-axis gimbal stabilizes captured imagery as the aircraft moves, while its Ethernet interface allows images to be transferred to the Jetson for onboard processing. ●	Captures 4K video and 8 MP images ●	Provides three-axis image stabilization ●	Supports 30× optical zoom ●	Provides Ethernet and HDMI video output ●	Integrates with ArduPilot and PX4 systems",
      "GPS Module - CubePilot Here3+: The Here3+ GPS module was installed to provide Sentinel with position, velocity, and navigation data for autonomous flight. It communicates with the Cube Orange+ through DroneCAN and includes onboard inertial sensors that support heading and navigation functions. ●	Supports GPS, GLONASS, and BeiDou constellations ●	Provides an 8 Hz navigation update rate ●	Communicates through DroneCAN ●	Includes a compass, accelerometer, and gyroscope ●	Supports RTK positioning when used with a compatible base station",
      "Telemetry Modem - RFD900x: The RFD900x telemetry modem was installed to provide wireless communication between Sentinel and the Ground Control Station. It transfers aircraft position, battery status, flight data, and system information while allowing operators to monitor the mission through Mission Planner. ●	Operates in the 902–928 MHz frequency range ●	Supports air-data rates up to 500 kbps ●	Provides diversity-antenna support ●	Supports long-range line-of-sight communication ●	Integrates with Mission Planner and MAVLink systems",
      "Remote Controller - FrSky Taranis X9D+: The Taranis X9D+ was retained as Sentinel’s handheld transmitter for manual operation and safety-pilot intervention. It allows the pilot to control the aircraft during preflight testing, takeoff, landing, and emergency situations. Although Sentinel is designed for autonomous operation, the controller remains an essential part of the manual override system. ●	Provides manual aircraft control ●	Supports configurable channels and flight modes ●	Displays receiver telemetry ●	Interfaces with the Archer Plus SR10+ receiver ●	Enables immediate safety-pilot takeover",
      "RC Receiver - FrSky Archer Plus SR10+: The Archer Plus SR10+ receiver was installed to receive manual control commands from the safety pilot’s remote controller. It provides the connection required for pilot takeover during testing, takeoff, landing, or an emergency while maintaining telemetry feedback to the transmitter. ●	Provides 10 configurable channel ports ●	Supports PWM, SBUS, FBUS, and S.Port interfaces ●	Includes an integrated three-axis gyroscope ●	Includes an integrated three-axis accelerometer ●	Supports telemetry-enabled, full-range control",
      "Power Distribution Board - Sky-Drones SmartAP PDB: The SmartAP Power Distribution Board was installed to distribute power from Sentinel’s battery system to the propulsion and avionics components. It also provides filtered voltage and current measurements to the flight controller and includes regulated power outputs for supporting electronics. ●	Supports input voltages up to 60 V ●	Distributes power to multiple motors and peripherals ●	Measures battery voltage and current ●	Provides regulated 5 V power output ●	Supports high-current aircraft power systems",
      "Anti-Spark Switch - Flipsky 200A Anti-Spark Switch: The Flipsky anti-spark switch was installed between Sentinel’s battery system and main power-distribution hardware. It controls system startup while reducing the electrical arcing and inrush current that can occur when a high-capacity battery is connected. Its aluminum case also improves heat dissipation and protects the internal circuitry. ●	Reduces electrical arcing during power connection ●	Limits startup inrush current ●	Provides controlled system power activation ●	Protects high-current connectors and electronics ●	Supports high-current electrical systems",
    ],
    title: "AVIONICS",
    description: "Sentinel’s avionics system integrates the flight controller, navigation sensors, onboard computer, imaging equipment, communications hardware, and power-management electronics required for autonomous operation. The system provides flight control, positioning, telemetry, environmental sensing, and communication with the Ground Control Station while supporting manual takeover, return-to-launch, flight termination, and other safety functions.",
  },
];

// Splits a text cell's body on "●" bullet markers so each bullet renders as
// its own indented line instead of running together in one paragraph.
function renderHexBody(body) {
  const parts = body.split("●").map((part) => part.trim()).filter(Boolean);
  if (parts.length <= 1) return <p>{body}</p>;

  const [intro, ...bullets] = parts;

  return (
    <>
      {intro && <p>{intro}</p>}
      <ul className="drone-section__hex-list">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </>
  );
}

function DroneSection({ image, images, texts, title, description, isOpen, onToggle }) {
  // One alternating image/text pair per real photo, so the rectangle count
  // tracks how much content this section actually has instead of a fixed count.
  const cellTypes = images.flatMap(() => ["image", "text"]);

  return (
    <div className={`drone-section${isOpen ? " drone-section--open" : ""}`}>
      <button
        type="button"
        className="drone-section__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="drone-section__image-placeholder" aria-hidden="true">
          <img src={image} alt="" className="drone-section__image" />
        </div>

        <div className="drone-section__heading">
          <h2 className="drone-section__title">{title}</h2>
          <p className="drone-section__description">{description}</p>
        </div>

        <svg
          className="drone-section__chevron"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
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
      </button>

      <div className="drone-section__body-wrapper">
        <div className="drone-section__body">
          <div className="drone-section__hex-grid">
            {cellTypes.map((type, i) => (
              <div key={i} className={`drone-section__hex drone-section__hex--${type}`}>
                {type === "image" ? (
                  <img
                    src={images[i / 2]}
                    alt=""
                    className="drone-section__hex-image"
                  />
                ) : (
                  (() => {
                    const text = texts[(i - 1) / 2];
                    const colonIndex = text.indexOf(":");
                    if (colonIndex === -1) return renderHexBody(text);

                    const heading = text.slice(0, colonIndex);
                    const body = text.slice(colonIndex + 1).trim();
                    return (
                      <>
                        <strong className="drone-section__hex-text-title">{heading}</strong>
                        {renderHexBody(body)}
                      </>
                    );
                  })()
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Drone() {
    const [openSections, setOpenSections] = useState(() => DRONE_SECTIONS.map(() => false));
    const [isModelVisible, setIsModelVisible] = useState(true);
    const modelContainerRef = useRef(null);

    const toggleSection = (index) => {
        setOpenSections((prev) => prev.map((open, i) => (i === index ? !open : open)));
    };

    // The model's render loop runs every frame forever by default, even once the
    // user has scrolled past it or switched tabs. Pausing it when it's off-screen
    // (or the tab isn't active) keeps it loaded — no reload delay — but stops the
    // continuous GPU/CPU cost while nobody's looking at it.
    useEffect(() => {
        const node = modelContainerRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsModelVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    const [isTabVisible, setIsTabVisible] = useState(!document.hidden);
    useEffect(() => {
        const handleVisibilityChange = () => setIsTabVisible(!document.hidden);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, []);

    const isModelActive = isModelVisible && isTabVisible;

    return (
        <div className="drone-page-container">
            <div className="drone-page--hero-container">
                <div className="drone-hero-text">
                    <h1 className="drone-hero-text__title">SENTINEL</h1>
                    <p className="drone-hero-text__description">
                        Our fully autonomous UAV, built from the ground up for the 2026 SUAS
                        competition. Every subsystem — airframe, avionics, propulsion, and
                        payload — is engineered to work as one integrated system.
                    </p>
                </div>
                <div className="drone-model-container" ref={modelContainerRef}>
                    <Canvas
                        dpr={1}
                        camera={{ fov: 45 }}
                        style={{ width: "100%", height: "100%" }}
                        frameloop={isModelActive ? "always" : "never"}
                    >
                        <color attach="background" args={["#090909"]} />
                        <Suspense fallback={null}>
                            <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                                <Stage environment={null} preset="rembrandt" intensity={1.2} shadows={false}>
                                    <Model scale={5.0} />
                                </Stage>
                            </PresentationControls>
                        </Suspense>
                    </Canvas>
                    <Loader />
                </div>
            </div>

            <div className="drone-sections-container">
                {DRONE_SECTIONS.map((section, index) => (
                    <DroneSection
                        key={section.title}
                        image={section.image}
                        images={section.images}
                        texts={section.texts}
                        title={section.title}
                        description={section.description}
                        isOpen={openSections[index]}
                        onToggle={() => toggleSection(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Drone;
