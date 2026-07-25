import { useMemo, useState } from "react";
import "../styles/tips.css";

const resources = [
  {
    category: "Simulation",
    type: "Simulation",
    title: "Gazebo LiDAR Simulation",
    author: "Max Gross",
    description:
      "A virtual drone uses a 2D LiDAR sensor to detect obstacles, map its surroundings, and adjust its path before real flight testing.",
    tags: ["Gazebo", "ROS", "LiDAR"],
  },
  {
    category: "Simulation",
    type: "Simulation",
    title: "Object Recognition Simulation",
    author: "Joshua Estrada",
    description:
      "A simulated mission combining waypoint flight, real-time object detection, detection logs, and payload-drop waypoint insertion.",
    tags: ["AirSim", "Mission Planner", "Vision"],
  },
  {
    category: "Simulation",
    type: "Simulation",
    title: "Triggering Jetson Shutdown Through Mission Planner",
    author: "Areg Hovumyan",
    description:
      "A ROS2 and MAVROS test that validates ground-initiated companion-computer shutdown during simulation.",
    tags: ["Jetson", "MAVROS", "ROS2"],
  },
  {
    category: "Simulation",
    type: "Simulation",
    title: "Dynamic Waypoint Mission Simulation",
    author: "Ryan Tran",
    description:
      "A virtual mission used to monitor aircraft path, waypoint progress, heading, and image-capture messages before applying the workflow to Sentinel.",
    tags: ["Autonomy", "Waypoints", "Mission Planner"],
  },
  {
    category: "Simulation",
    type: "Simulation",
    title: "Telemetry Noise Simulation",
    author: "Waamiq Sharrar",
    description:
      "An RFD900 radio-health evaluation comparing RSSI and noise levels to find telemetry issues before flight testing.",
    tags: ["RFD900", "Telemetry", "RSSI"],
  },
  {
    category: "UAV Design",
    type: "Document",
    title: "Material Research",
    author: "Sarah Pu",
    description:
      "Frame-material and airframe-layout trade studies for making an informed early vehicle design decision.",
    tags: ["Trade Study", "Airframe", "Materials"],
  },
  {
    category: "UAV Design",
    type: "Research",
    title: "The Role of Drones in Disaster Response",
    author: "E. Yücesoy, B. Balcik, and E. Coban",
    description:
      "Background research connecting UAV design decisions to real emergency-response needs.",
    tags: ["Research", "Disaster Response"],
  },
  {
    category: "UAV Design",
    type: "Research",
    title: "Operational Use of UAS in Public Safety",
    author: "H. M. Ray, R. Singer, and N. Ahmed",
    description:
      "A review of small UAS use in search and rescue, firefighting, law enforcement, and evidence collection.",
    tags: ["Public Safety", "Research"],
  },
  {
    category: "Payload",
    type: "Document",
    title: "Parachute Evaluation",
    author: "Aiden Sanchez",
    description:
      "A 2026 payload-parachute selection study covering descent rate, deployment height, wind drift, landing accuracy, and folding references.",
    tags: ["Payload", "Parachute", "Calculations"],
  },
  {
    category: "Payload",
    type: "Guide",
    title: "Payload Electrical and Software Integration Guide",
    author: "Waamiq Sharrar",
    description:
      "A practical reference for payload wiring, Jetson GPIO, PCA9685 servo control, I2C checks, and sensor integration.",
    tags: ["Jetson", "GPIO", "I2C"],
  },
  {
    category: "GNC",
    type: "Document",
    title: "6S9P Battery and Power Distribution Concept",
    author: "Waamiq Sharrar",
    description:
      "Battery, energy, current, wire-gauge, connector, and power-distribution tradeoffs for a safe electrical architecture.",
    tags: ["Power", "Battery", "PDB"],
  },
  {
    category: "GNC",
    type: "Reference",
    title: "GCS Error List",
    author: "Waamiq Sharrar",
    description:
      "A fast troubleshooting reference for common pre-arm, pre-flight, and in-flight ground-control errors.",
    tags: ["GCS", "Troubleshooting", "Pixhawk"],
  },
  {
    category: "GNC",
    type: "Procedure",
    title: "Flight Test Procedure",
    author: "Francis Saspa",
    description:
      "A step-by-step operator script for calibration, setup, safety callouts, flight monitoring, and post-flight shutdown.",
    tags: ["Safety", "Flight Test", "Checklist"],
  },
  {
    category: "GNC",
    type: "Reference",
    title: "Flight Mode Reference Guide",
    author: "Francis Saspa",
    description:
      "A quick guide to common ArduPilot modes, GPS needs, pilot input, and expected aircraft behavior.",
    tags: ["ArduPilot", "Flight Modes"],
  },
  {
    category: "GNC",
    type: "Document",
    title: "CAN Wire and Shielding Documentation",
    author: "Michael Kaydanik",
    description:
      "CAN topology, termination, cable selection, EMI risks, and mitigation guidance for reliable integration.",
    tags: ["CAN", "EMI", "Wiring"],
  },
  {
    category: "GNC",
    type: "Checklist",
    title: "Pre-Flight Checklist",
    author: "Leo Chen",
    description:
      "A detailed on-site checklist covering frame readiness, motor checks, propeller safety, and flight observations.",
    tags: ["Safety", "Pre-Flight", "Operations"],
  },
  {
    category: "Obstacle Avoidance",
    type: "Guide",
    title: "The Basics of LiDAR and Obstacle Avoidance",
    author: "Ethan McKendell",
    description:
      "A technical tutorial for LiDAR, Pixhawk parameters, MAVLink, ROS, and path-planning approaches such as Bendy Ruler and Dijkstra's.",
    tags: ["LiDAR", "Pixhawk", "ROS"],
  },
  {
    category: "Object Recognition",
    type: "Handbook",
    title: "Object Recognition Handbook",
    author: "Ryan Tran",
    description:
      "A central setup, workflow, and troubleshooting resource for Jetson, cameras, ROS2, MAVROS, Mission Planner, and HPC use.",
    tags: ["Jetson", "ROS2", "Onboarding"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "Introduction to Git",
    author: "Ryan Tran",
    description:
      "A friendly reference for repositories, branches, commits, pull requests, and shared software workflows.",
    tags: ["Git", "Software"],
  },
  {
    category: "Object Recognition",
    type: "Procedure",
    title: "Object Recognition Flight Setup Procedure",
    author: "Ryan Tran",
    description:
      "A structured pre-flight procedure for camera verification, MAVROS, services, waypoint updates, and log retrieval.",
    tags: ["Vision", "Flight Test", "MAVROS"],
  },
  {
    category: "Object Recognition",
    type: "Checklist",
    title: "Troubleshooting MAVROS Heartbeat Connection",
    author: "Ryan Tran",
    description:
      "A concise diagnostic guide for ROS2 launch, serial permissions, wiring, TELEM ports, and baud-rate settings.",
    tags: ["MAVROS", "Troubleshooting"],
  },
  {
    category: "Object Recognition",
    type: "Document",
    title: "Software Architecture and Code Documentation",
    author: "Ryan Tran",
    description:
      "A system-level map of detection, waypoints, GPS, mapping, image capture, shutdown, parameters, and launch files.",
    tags: ["Architecture", "ROS2", "Software"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "HPC Setup and Usage Guide",
    author: "Ryan Tran",
    description:
      "A practical guide to the university HPC environment, Conda, tmux, Linux, and SLURM job workflows.",
    tags: ["HPC", "SLURM", "Conda"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "YOLO Execution Process",
    author: "Ryan Tran",
    description:
      "A repeatable workflow for data transfer, Roboflow, YOLO training, interactive jobs, batch jobs, and model weights.",
    tags: ["YOLO", "HPC", "Training"],
  },
  {
    category: "Object Recognition",
    type: "Document",
    title: "Object Detection SAHI Documentation",
    author: "Areg Hovumyan",
    description:
      "A reference for the aerial-image detection node: slicing, duplicate filtering, annotations, ROS2 topics, and tuning.",
    tags: ["SAHI", "YOLO", "Detection"],
  },
  {
    category: "Object Recognition",
    type: "Guide",
    title: "Custom Model Training Guide",
    author: "Areg Hovumyan",
    description:
      "A mission-specific dataset workflow using drone-perspective images, annotation, synthetic images, and Unity.",
    tags: ["Training", "Datasets", "Unity"],
  },
];

const categories = [
  "All",
  ...new Set(resources.map((resource) => resource.category)),
];

function ResourceCard({ resource, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="tips-card" style={{ "--delay": `${index * 45}ms` }}>
      <div className="tips-card__topline">
        <span className="tips-card__type">{resource.type}</span>
        <span className="tips-card__category">{resource.category}</span>
      </div>
      <h3>{resource.title}</h3>
      <p className="tips-card__author">By {resource.author}</p>
      <p
        className={
          expanded
            ? "tips-card__description is-expanded"
            : "tips-card__description"
        }
      >
        {resource.description}
      </p>
      <div className="tips-card__bottom">
        <div className="tips-card__tags">
          {resource.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read overview"}
          <span aria-hidden="true"> {expanded ? "−" : "+"}</span>
        </button>
      </div>
    </article>
  );
}

function Tips() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const matchesCategory =
        activeCategory === "All" || resource.category === activeCategory;
      const searchable =
        `${resource.title} ${resource.author} ${resource.description} ${resource.tags.join(" ")}`.toLowerCase();
      return matchesCategory && (!search || searchable.includes(search));
    });
  }, [activeCategory, query]);

  return (
    <main className="tips-page">
      <section className="tips-hero">
        <div className="tips-hero__grid" aria-hidden="true" />
        <p className="tips-eyebrow">Bronco ASTRA knowledge base</p>
        <h1>
          Build on what
          <br />
          <em>we learned.</em>
        </h1>
        <p className="tips-hero__copy">
          Practical simulations, field-tested procedures, and technical
          references created to help the next team move faster with more
          confidence.
        </p>
        <div className="tips-stats">
          <span>
            <strong>{resources.length}</strong> resources
          </span>
          <span>
            <strong>5</strong> disciplines
          </span>
          <span>
            <strong>2026</strong> field notes
          </span>
        </div>
      </section>

      <section className="tips-library" aria-labelledby="library-heading">
        <div className="tips-library__header">
          <div>
            <p className="tips-eyebrow">Explore the library</p>
            <h2 id="library-heading">Find a starting point</h2>
          </div>
          <label className="tips-search">
            <span className="sr-only">Search resources</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4" />
            </svg>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search topics, tools, or authors"
            />
          </label>
        </div>

        <div className="tips-filters" aria-label="Filter resources by category">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "is-active" : ""}
              type="button"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="tips-results">
          Showing {filteredResources.length}{" "}
          {filteredResources.length === 1 ? "resource" : "resources"}
        </p>
        <div className="tips-grid">
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={resource.title}
              resource={resource}
              index={index}
            />
          ))}
        </div>
        {!filteredResources.length && (
          <div className="tips-empty">
            <p>No resources matched that search.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="tips-callout">
        <p className="tips-eyebrow">Technical graphics</p>
        <h2>See the system before you build it.</h2>
        <p>
          Our technical-graphics collection documents Sentinel’s subsystem
          communications, ROS-based object-detection pipeline, and the
          trade-study process behind engineering decisions.
        </p>
        <span className="tips-callout__line" aria-hidden="true" />
      </section>
    </main>
  );
}

export default Tips;
