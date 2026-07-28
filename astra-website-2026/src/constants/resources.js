const resources = [
  {
    type: "Simulation",
    category: "Simulation",
    title: "Gazebo LiDAR Simulation",
    author: "Max Gross",
    description:
      "A virtual drone uses a 2D LiDAR sensor to detect obstacles, map its surroundings, and adjust its path before real flight testing.",
    link: "https://www.youtube.com/watch?v=xgWjMpqiuKk",
    tags: ["Gazebo", "ROS", "LiDAR"],
  },
  {
    type: "Simulation",
    category: "Simulation",
    title: "Object Recognition Simulation",
    author: "Joshua Estrada",
    description:
      "A simulated mission combining waypoint flight, real-time object detection, detection logs, and payload-drop waypoint insertion.",
    link: "https://drive.google.com/file/d/1MPoKDMezzSS-MAb_oUhWLQGHRm0j4SkE/view",
    tags: ["AirSim", "Mission Planner", "Vision"],
  },
  {
    type: "Simulation",
    category: "Simulation",
    title: "Triggering Jetson Shutdown Through Mission Planner",
    author: "Areg Hovumyan",
    description:
      "A ROS2 and MAVROS test that validates ground-initiated companion-computer shutdown during simulation.",
    link: "https://livecsupomona-my.sharepoint.com/personal/akvogel_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakvogel%5Fcpp%5Fedu%2FDocuments%2FElectrical%20%26%20Software%2FSoftware%2FObject%20Recognition%2FDocumentation%2FSimulations%2F12%2D9%2D25%20Shutting%20Jetson%20through%20MissionPlanner%20simulation%2FRecording%202025%2D12%2D09%20104557%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ct=1785133198176&or=WORD%2DWEB%2EBODY%2ENT&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ea6ae3ce3%2D66df%2D416a%2Daac7%2Dad5d5d8e3557",
    tags: ["Jetson", "MAVROS", "ROS2"],
  },
  {
    type: "Simulation",
    category: "Simulation",
    title: "Dynamic Waypoint Mission Simulation",
    author: "Ryan Tran",
    description:
      "A virtual mission used to monitor aircraft path, waypoint progress, heading, and image-capture messages before applying the workflow to real flight testing.",
    link: "https://livecsupomona-my.sharepoint.com/personal/akvogel_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakvogel%5Fcpp%5Fedu%2FDocuments%2FElectrical%20%26%20Software%2FSoftware%2FObject%20Recognition%2FDocumentation%2FSimulations%2F2%2D26%2D26%20Dynamic%20Flight%20Test%2Fflight%5Fsim%5F02%2D26%2D26%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ct=1785133279105&or=WORD%2DWEB%2EBODY%2ENT&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E6b89fc5b%2Da93b%2D4e94%2D9200%2D8acd48bb640d",
    tags: ["Simulation", "Waypoints", "Mission"],
  },
  {
    type: "Simulation",
    category: "Simulation",
    title: "Telemetry Noise Simulation",
    author: "Waamiq Sharrar",
    description:
      "An RFD900 radio-health evaluation comparing RSSI and noise levels to find telemetry issues before flight testing.",
    link: "https://livecsupomona-my.sharepoint.com/personal/akvogel_cpp_edu/_layouts/15/stream.aspx?id=%2Fpersonal%2Fakvogel%5Fcpp%5Fedu%2FDocuments%2FElectrical%20%26%20Software%2FGNC%2FGCS%2FRFD900x%20Noise%20Simulation%2F2%2D25%2D26%2F2026%2D02%2D25%2019%2D01%2D51%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0&ct=1785133316564&or=WORD%2DWEB%2EBODY%2ENT&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E0f3ae7f9%2D57df%2D406c%2Da91e%2D0fb9bf200ed3",
    tags: ["RFD900", "Telemetry", "RSSI"],
  },
  {
    type: "Document",
    category: "UAV Design",
    title: "Material Research",
    author: "Sarah Pu",
    description:
      "Frame-material and airframe-layout trade studies for making an informed early vehicle design decision.",
    link: "https://livecsupomona-my.sharepoint.com/:x:/g/personal/dnking_cpp_edu/IQDBlifXgkWKR4zxHvRFObXdASFd6-eW4yBmfhY8zYmNA54?e=1DDAe7&or=WORD-WEB.BODY.NT&ct=1785133328382",
    tags: ["Materials", "Airframe", "Design"],
  },
  {
    category: "UAV Design",
    type: "Research",
    title: "The Role of Drones in Disaster Response",
    author: "E. Yücesoy, B. Balcik, and E. Coban",
    description:
      "Background research connecting UAV design decisions to real emergency-response needs.",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/itor.13484",
    tags: ["Research", "Disaster Response"],
  },
  {
    category: "UAV Design",
    type: "Research",
    title: "Operational Use of UAS in Public Safety",
    author: "H. M. Ray, R. Singer, and N. Ahmed",
    description:
      "A review of small UAS use in search and rescue, firefighting, law enforcement, and evidence collection.",
    link: "https://arxiv.org/abs/2207.07761",
    tags: ["Public Safety", "Research"],
  },
  {
    category: "Payload",
    type: "Document",
    title: "Parachute Evaluation",
    author: "Aiden Sanchez",
    description:
      "A 2026 payload-parachute selection study covering descent rate, deployment height, wind drift, landing accuracy, and folding references.",
    link: "https://livecsupomona-my.sharepoint.com/shared?listurl=https%3A%2F%2Flivecsupomona%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fdnking%5Fcpp%5Fedu%2FDocuments&id=%2Fpersonal%2Fdnking%5Fcpp%5Fedu%2FDocuments%2FSUAS%202026%2FStructural%20%26%20Systems%2FVIS%2FPayload%2FDocumentation%2FParachute%20Reports%2FProject%20Astra%20%2D%20Hemispherical%2060%5F%20Main%20Parachute%20Evaluation%28updated%20calcs%29%20%282%29%2Epdf&parent=%2Fpersonal%2Fdnking%5Fcpp%5Fedu%2FDocuments%2FSUAS%202026%2FStructural%20%26%20Systems%2FVIS%2FPayload%2FDocumentation%2FParachute%20Reports&ct=1785133612714&or=WORD%2DWEB%2EBODY%2ENT&shareLink=1&ga=1",
    tags: ["Payload", "Parachute", "Calculations"],
  },
  {
    category: "Payload",
    type: "Guide",
    title: "Payload Electrical and Software Integration Guide",
    author: "Waamiq Sharrar",
    description:
      "A practical reference for payload wiring, Jetson GPIO, PCA9685 servo control, I2C checks, and sensor integration.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQBHpE0R-FQLR77J7BG1PJ5YARLZwz8hdmdBsmk1jwj3Wdw?e=POYdLt&or=WORD-WEB.BODY.NT&ct=1785133639631",
    tags: ["Jetson", "GPIO", "I2C"],
  },
  {
    category: "GNC",
    type: "Document",
    title: "6S9P Battery and Power Distribution Concept",
    author: "Waamiq Sharrar",
    description:
      "Battery, energy, current, wire-gauge, connector, and power-distribution tradeoffs for a safe electrical architecture.",
    link: "https://livecsupomona-my.sharepoint.com/shared?listurl=https%3A%2F%2Flivecsupomona%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fakvogel%5Fcpp%5Fedu%2FDocuments&id=%2Fpersonal%2Fakvogel%5Fcpp%5Fedu%2FDocuments%2FElectrical%20%26%20Software%2FGNC%2FSentinel%2F6S9P%20Concetualizing%2Epdf&parent=%2Fpersonal%2Fakvogel%5Fcpp%5Fedu%2FDocuments%2FElectrical%20%26%20Software%2FGNC%2FSentinel&ct=1785133706170&or=WORD%2DWEB%2EBODY%2ENT&shareLink=1&ga=1",
    tags: ["Power", "Battery", "PDB"],
  },
  {
    category: "GNC",
    type: "Reference",
    title: "GCS Error List",
    author: "Waamiq Sharrar",
    description:
      "A fast troubleshooting reference for common pre-arm, pre-flight, and in-flight ground-control errors.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQDKQT1DPVSKRK4luR7OtzepAVu0GXodtyqy-ftyZiFwhZw?e=vJTY8o&or=WORD-WEB.BODY.NT&ct=1785133722957",
    tags: ["GCS", "Troubleshooting", "Pixhawk"],
  },
  {
    category: "GNC",
    type: "Procedure",
    title: "Flight Test Procedure",
    author: "Francis Saspa",
    description:
      "A step-by-step operator script for calibration, setup, safety callouts, flight monitoring, and post-flight shutdown.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQD11CfSZu_oSq3d9KKks7QSAW_3ggSKC9i1MAEqMp88OpY?e=KCpucb&or=WORD-WEB.BODY.NT&ct=1785133798366",
    tags: ["Safety", "Flight Test", "Checklist"],
  },
  {
    category: "GNC",
    type: "Reference",
    title: "Flight Mode Reference Guide",
    author: "Francis Saspa",
    description:
      "A quick guide to common ArduPilot modes, GPS needs, pilot input, and expected aircraft behavior.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQADNc12FcKRR6LhLBVnvX3eAQjI0oO5vO1A4NmCbKHMyEY?e=EEWeUz&or=WORD-WEB.BODY.NT&ct=1785133811751",
    tags: ["ArduPilot", "Flight Modes"],
  },
  {
    category: "GNC",
    type: "Document",
    title: "CAN Wire and Shielding Documentation",
    author: "Michael Kaydanik",
    description:
      "CAN topology, termination, cable selection, EMI risks, and mitigation guidance for reliable integration.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQCa_rEE9qBGR7dxB3XjeihgAQ-IvZdZGrYwTPGw_DFFYCk?e=SCfrCx&or=WORD-WEB.BODY.NT&ct=1785133862251",
    tags: ["CAN", "EMI", "Wiring"],
  },
  {
    category: "GNC",
    type: "Checklist",
    title: "Pre-Flight Checklist",
    author: "Leo Chen",
    description:
      "A detailed on-site checklist covering frame readiness, motor checks, propeller safety, and flight observations.",
    link: "https://drive.google.com/file/d/1suxkOlfv0v5XavHAQb0hyod1w8exiWKX/view",
    tags: ["Safety", "Pre-Flight", "Operations"],
  },
  {
    category: "Obstacle Avoidance",
    type: "Guide",
    title: "The Basics of LiDAR and Obstacle Avoidance",
    author: "Ethan McKendell",
    description:
      "A technical tutorial for LiDAR, Pixhawk parameters, MAVLink, ROS, and path-planning approaches such as Bendy Ruler and Dijkstra's.",
    link: "https://drive.google.com/file/d/1NpjCnWOdh9B8eaUiAXJacj806BH2M0pz/view",
    tags: ["LiDAR", "Pixhawk", "ROS"],
  },
  {
    category: "Object Recognition",
    type: "Handbook",
    title: "Object Recognition Handbook",
    author: "Ryan Tran",
    description:
      "A central setup, workflow, and troubleshooting resource for Jetson, cameras, ROS2, MAVROS, Mission Planner, and HPC use.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQDUr5GjqkqXQr-_v7RIEGEEAb9T6T7JRDOhRjeZWubU_ts?e=YSJDol&or=WORD-WEB.BODY.NT&ct=1785133998931",
    tags: ["Jetson", "ROS2", "Onboarding"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "Introduction to Git",
    author: "Ryan Tran",
    description:
      "A friendly reference for repositories, branches, commits, pull requests, and shared software workflows.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQCfpo4KxL9aSZy9O4WDDKVnAQ598pib5x7WeLtz282b2AI?e=fau32J&or=WORD-WEB.BODY.NT&ct=1785134012843",
    tags: ["Git", "Software"],
  },
  {
    category: "Object Recognition",
    type: "Procedure",
    title: "Object Recognition Flight Setup Procedure",
    author: "Ryan Tran",
    description:
      "A structured pre-flight procedure for camera verification, MAVROS, services, waypoint updates, and log retrieval.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQBQGgKKFLd5SZK7YmvJJdQSARxttD42ThFFQFGXRVu7xi4?e=2RfLLs&or=WORD-WEB.BODY.NT&ct=1785134027951",
    tags: ["Vision", "Flight Test", "MAVROS"],
  },
  {
    category: "Object Recognition",
    type: "Checklist",
    title: "Troubleshooting MAVROS Heartbeat Connection",
    author: "Ryan Tran",
    description:
      "A concise diagnostic guide for ROS2 launch, serial permissions, wiring, TELEM ports, and baud-rate settings.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQBEMgFjtU_cQLJZmOuIpcC9AeLFyN3eFHPyPFWm625wQwo?e=zIJb1y&or=WORD-WEB.BODY.NT&ct=1785134044213",
    tags: ["MAVROS", "Troubleshooting"],
  },
  {
    category: "Object Recognition",
    type: "Document",
    title: "Software Architecture and Code Documentation",
    author: "Ryan Tran",
    description:
      "A system-level map of detection, waypoints, GPS, mapping, image capture, shutdown, parameters, and launch files.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQA0okn0f_d-R7qyfZkcXQMvAUNRwTdGXW2KMCNGyHElMmw?e=XX6xFW",
    tags: ["Architecture", "ROS2", "Software"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "HPC Setup and Usage Guide",
    author: "Ryan Tran",
    description:
      "A practical guide to the university HPC environment, Conda, tmux, Linux, and SLURM job workflows.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQB59-T3WTCgT7tyzXjXkm5-AZ7RoAz0AdtEL3M0bMx8STM?e=Jh680k",
    tags: ["HPC", "SLURM", "Conda"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "YOLO Execution Process",
    author: "Ryan Tran",
    description:
      "A repeatable workflow for data transfer, Roboflow, YOLO training, interactive jobs, batch jobs, and model weights.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQDVfFfVii64TKR98ci00v_LAY7DOPnsx-7dznuBi17D_e8?e=BZ1Ltg",
    tags: ["YOLO", "HPC", "Training"],
  },
  {
    category: "Object Recognition",
    type: "Document",
    title: "Object Detection SAHI Documentation",
    author: "Areg Hovumyan",
    description:
      "A reference for the aerial-image detection node: slicing, duplicate filtering, annotations, ROS2 topics, and tuning.",
    link: "",
    tags: ["SAHI", "YOLO", "Detection"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "Custom Model Training Guide",
    author: "Areg Hovumyan",
    description:
      "A mission-specific dataset workflow using drone-perspective images, annotation, synthetic images, and Unity.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQCNk4xUFoJGQ66AL8vf93bWAeACdCPmb_zYDW6gySSGWHY?e=DGgqhP",
    tags: ["Training", "Datasets", "Unity"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "Custom Model Training Guide",
    author: "Areg Hovumyan",
    description:
      "A mission-specific object detection dataset workflow using drone-perspective images, annotation, AI-generated synthetic data, and Unity.",
    link: "https://livecsupomona-my.sharepoint.com/:w:/g/personal/akvogel_cpp_edu/IQDV4lQlZWQxQZN06oluJHiiAcD1_lIO1Mvqzd0FqsTAWqQ?e=SqOUlW",
    tags: ["Training", "Datasets", "Unity"],
  },
];

export default resources;