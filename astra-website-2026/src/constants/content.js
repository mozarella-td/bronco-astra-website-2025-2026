import timelineElements from "../constants/timeline-elements";
import resources from "./resources.js";


export const timelineContent = timelineElements.map((element) => ({
  title: element.titleDescription,

  text: `
    ${element.title}
    ${element.date}
    ${element.titleDescription}
    ${element.description}
    ${element.alt}
  `,

  url: `/timeline#${element.id}`,

  type: "Timeline",
  category: element.title,
  image: element.img,
}));

const allContent = [
  ...timelineContent,

  // =====================
  // NAVBAR
  // =====================

  {
    title: "Navbar",
    text: `
      Home Team Drone Timeline Testing Tips 
      navigation menu website pages search
    `,
    url: "/#navbar"
  },


  // =====================
  // HOME PAGE
  // =====================

  {
    title: "Home Page",
    text: `
      Bronco ASTRA Cal Poly Pomona autonomous aerial systems
      student-led engineering team UAV drone innovation
      build fly innovate designing building testing
    `,
    url: "/"
  },

  {
    title: "Who We Are",
    text: `
      student-led unmanned aerial systems team
      California State Polytechnic University of Pomona
      engineering students collaboration
    `,
    url: "/"
  },

  {
    title: "What We Do",
    text: `
      autonomous aerial technology innovation
      engineering design testing UAV systems
    `,
    url: "/"
  },

  {
    title: "Why We Do It",
    text: `
      multidisciplinary engineering team
      real-world applications autonomous UAV systems
      hands-on engineering
    `,
    url: "/"
  },


  // =====================
  // TEAM PAGE
  // =====================

  {
    title: "Team Page",
    text: `
      project lead subteam leads members
      engineering teams Bronco ASTRA
      electrical software structural systems
    `,
    url: "/team"
  },

  {
    title: "Project Leads",
    text:
    "Ashton Vogel Electrical Software Lead Danielle King Structural Systems Lead leadership project management autonomous drone development",
    url: "/team#leads"
},

{
    title: "UAV Design Team",
    text:
    "UAV Design Unmanned Aerial Vehicle Design airframe structure manufacturing carbon fiber propulsion Stephen Posner Alissa Everman",
    url: "/team#uav"
},

{
    title: "Payload Team",
    text:
    "Payload drop mechanism delivery system water bottle beacon parachute Robbie Adriano Harrison Chung Alex Silyaev",
    url: "/team#payload"
},

{
    title: "Guidance Navigation Control GNC",
    text:
    "GNC Guidance Navigation Control autonomous flight waypoint navigation flight control Waamiq Sharrar avionics",
    url: "/team#gnc"
},

{
    title: "Object Recognition Team",
    text:
    "Object Recognition machine learning computer vision YOLO detection mapping Ryan Tran ROS autonomous perception",
    url: "/team#obj-rec"
},

{
    title: "Obstacle Avoidance Team",
    text:
    "Obstacle Avoidance LiDAR sensors ROS navigation collision prevention Kevin Kopcinski",
    url: "/team#obs-avo"
},

{
    title: "Systems Engineering Team",
    text:
    "Systems Engineering documentation integration scheduling technical design report website Ben Thien Nam Anh Vu",
    url: "/team#sys"
},

{
    title: "Advisors and Mentors",
    text:
    "Dr Subodh Bhandari aerospace engineering advisor Joshua Estrada Max Gross Leo Chen Matthew Romero mentors",
    url: "/team#advisors"
},

{
    title: "Sponsors",
    text:
    "Lockheed Martin sponsor ASTRA aerospace partnership",
    url: "/team#sponsors"
},


  // =====================
  // DRONE PAGE
  // =====================

  {
    title:"Sentinel Autonomous Drone",
    text:
    "Sentinel UAV autonomous drone SUAS competition 2026 search detect deliver airframe avionics propulsion payload",
    url:"/drone"
},

{
    title:"Payload System",
    text:
    "Payload casings drop mechanism parachute release mechanism water bottle beacon delivery system",
    url:"/drone#payload"
},

{
    title:"Battery System",
    text:
    "Battery packs AMASS XT60H JAG35 DC PowerStrip nine 6S batteries power distribution energy capacity",
    url:"/drone#battery"
},

{
    title:"Propulsion System",
    text:
    "MAD 5015 IPE motors 320KV electronic speed controllers ESC FLUXER carbon fiber propellers thrust",
    url:"/drone#propulsion"
},

{
    title:"Airframe Structure",
    text:
    "Carbon fiber plates aluminum motor arms PLA polycarbonate 3D printed mounts lightweight UAV structure",
    url:"/drone#structure"
},

{
    title:"Software Stack",
    text:
    "Mission Planner YOLO26 ArduPilot PyTorch TensorRT ROS Gazebo autonomous navigation simulation object detection",
    url:"/drone#software"
},

{
    title:"Avionics System",
    text:
    "Cube Orange Plus Jetson Orin Nano Super Unitree LiDAR SIYI ZR30 GPS Here3 RFD900x telemetry",
    url:"/drone#avionics"
},


  {
    title: "Payload System",
    text: `
      payload water bottle beacon
      parachute drop mechanism
      payload casing release system
      autonomous delivery mission
    `,
    url: "/drone"
  },


  {
    title: "Battery System",
    text: `
      battery power system
      AMASS XT60H connectors
      JAG35 DC PowerStrip
      6S battery packs
      parallel configuration
      voltage capacity energy
    `,
    url: "/drone"
  },


  {
    title: "Propulsion System",
    text: `
      motors electronic speed controllers ESC
      MAD 5015 IPE 320KV
      20.2 inch propellers
      FLUXER Pro carbon fiber propellers
      thrust flight performance
    `,
    url: "/drone"
  },


  {
    title: "Structure System",
    text: `
      airframe carbon fiber
      aluminum motor arms
      landing legs
      3D printed casings
      PLA polycarbonate hardware mounts
      lightweight structural design
    `,
    url: "/drone"
  },


  {
    title: "Software System",
    text: `
      Mission Planner
      YOLO26 object detection
      ArduPilot
      PyTorch
      NVIDIA TensorRT
      ROS Robot Operating System
      Gazebo simulation
      autonomous navigation
      machine learning AI computer vision
    `,
    url: "/drone"
  },


  {
    title: "Avionics System",
    text: `
      CubePilot Cube Orange+
      NVIDIA Jetson Orin Nano Super
      Unitree 4D LiDAR L1
      SIYI ZR30 camera
      Here3 GPS
      RFD900x telemetry modem
      FrSky Taranis X9D+
      Archer Plus receiver
      Sky-Drones SmartAP PDB
      Flipsky anti spark switch
      flight controller sensors communication
    `,
    url: "/drone"
  },

  // =====================
// TESTING PAGE
// =====================

{
  title: "Testing Page",
  text: `
    Bronco ASTRA testing field tests
    flight testing safety procedures
    aircraft validation autonomous flight
    Sentinel drone testing
  `,
  url: "/testing"
},

{
  title: "First Test Flight with Sentinel",
  text: `
    March 30 2026
    first test flight Sentinel Hexacopter
    open soccer field
    flight range amps voltage signal strength
    autonomous drone flight testing
  `,
  url: "/testing#flight-1"
},

{
  title: "Competition Entry Flight Readiness Test",
  text: `
    March 31 2026
    SUAS competition 2026 flight readiness test
    Sentinel successful flight competition entry
  `,
  url: "/testing#flight-2"
},

{
  title: "Sentinel Limit Test",
  text: `
    April 11 2026
    maximum speed testing
    Sentinel performance limits
    autonomous mission flight test
    speed angle of attack amps
  `,
  url: "/testing#flight-3"
},

{
  title: "Payload and Object Recognition Test",
  text: `
    April 25 2026
    payload drop test
    object recognition testing
    aerial imagery mapping algorithm
    parachute deployment
    Sentinel mission test
  `,
  url: "/testing#flight-6"
},

{
  title: "Object Recognition Longest Test Flight",
  text: `
    May 2 2026
    longest object recognition mission
    396 photographs aerial imagery
    mapping algorithm computer vision
    payload delivery test
  `,
  url: "/testing#flight-7"
},

{
  title: "Speed and Endurance Testing",
  text: `
    June 6 2026
    Sentinel speed testing
    endurance flight
    8 10 12 14 kph testing
    battery failsafe RTL Return to Launch
  `,
  url: "/testing#flight-9"
},

// =====================
// TIPS PAGE
// =====================

...resources.map((resource) => ({
  title: resource.title,

  text: `
    Bronco ASTRA knowledge base
    ${resource.type}
    ${resource.category}
    ${resource.title}
    ${resource.author}
    ${resource.description}
    ${resource.tags.join(" ")}
  `,

  url: "/tips"
})),


  // =====================
  // FOOTER
  // =====================

  {
    title: "Sponsors",
    text: `
      Lockheed Martin sponsor
      Bronco ASTRA sponsorship
      engineering partnership
    `,
    url: "/#footer"
  },


  {
    title: "Project Leads Contact",
    text: `
      Ashton Vogel Electrical Software Lead
      Danielle King Structural Systems Lead
      project leads contact email
    `,
    url: "/#footer"
  },


  {
    title: "Location",
    text: `
      California State Polytechnic University of Pomona
      Cal Poly Pomona CPP
      3801 W Temple Ave Pomona California
    `,
    url: "/#footer"
  },

  {
    title: "Tips Page",
    text: `
      guides documentation onboarding
      helpful tips resources
    `,
    url: "/tips"
  }

];

// ====== CLEAN VERSION FOR FUSE ======

const cleanContent = allContent
  .filter(c => c && typeof c === 'object')
  .map(c => ({
    title: typeof c.title === 'string' ? c.title : '',
    text: typeof c.text === 'string' ? c.text : '',
    url: c.url || ''
  }));

export default cleanContent;