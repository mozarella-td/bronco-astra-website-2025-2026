import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import timelineElements from "../constants/timeline-elements.js";

import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.css";

function Timeline() {
  const [expandedID, setExpandedID] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const defaultStyles = {
    contentStyle: { background: "#f5f5f5", color: "#000" },
    contentArrowStyle: { borderRight: "7px solid #f5f5f5" },
    iconStyle: { background: "#555", color: "#fff" },
  };

  const colorMap = {
    ASTRA: {
      contentStyle: { background: "#005030", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #005030" },
      iconStyle: { background: "#2E7D5B", color: "#fff" },
      buttonColor: "#005030",
    },
    "UAV Design": {
      contentStyle: { background: "#3B82F6", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #3B82F6" },
      iconStyle: { background: "#60A5FA", color: "#fff" },
      buttonColor: "#3B82F6",
    },
    Payload: {
      contentStyle: { background: "#E74C3C", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #E74C3C" },
      iconStyle: { background: "#F87171", color: "#fff" },
      buttonColor: "#E74C3C",
    },
    GNC: {
      contentStyle: { background: "#63C7E6", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #63C7E6" },
      iconStyle: { background: "#93D9F2", color: "#fff" },
      buttonColor: "#63C7E6",
    },
    "Object Recognition": {
      contentStyle: { background: "#A66DD4", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #A66DD4" },
      iconStyle: { background: "#C084FC", color: "#fff" },
      buttonColor: "#A66DD4",
    },
    "Obstacle Avoidance": {
      contentStyle: { background: "#FF7F00", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #FF7F00" },
      iconStyle: { background: "#FF8549", color: "#fff" },
      buttonColor: "#FF8549",
    },
    Systems: {
      contentStyle: { background: "#FFB81C", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid #FACC15" },
      iconStyle: { background: "#FACC15", color: "#fff" },
      buttonColor: "#FFB81C",
    },
  };

  const handleExpand = (id) => {
    setExpandedID((prevID) => (prevID === id ? null : id));
  };

  const filteredElements =
    activeFilter === "All"
      ? timelineElements
      : timelineElements.filter((element) => element.title === activeFilter);

  return (
    <div className="timeline-container">
      <section className="timeline-hero">
        <div className="timeline-hero__grid" aria-hidden="true" />
        <p className="timeline-eyebrow">Bronco ASTRA Timeline</p>
        <h1>
          See how we
          <br />
          <em>progressed.</em>
        </h1>
        <p className="timeline-hero__copy">
          A chronological snapshot of our team's progress, decisions, and
            engineering milestones as we prepare for SUAS 2026
        </p>
      </section>


      <div className="timeline-filter-container">
        <h3>Filter by Subteam:</h3>
        <div className="timeline-filter-buttons">
          {Object.keys(colorMap).map((subteam) => {
            const isActive = activeFilter === subteam;

            return (
              <button
                key={subteam}
                className={`timeline-filter-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveFilter(subteam)}
                style={{
                  backgroundColor: isActive
                    ? colorMap[subteam].buttonColor
                    : "#A4D65E",
                  color: isActive ? "#fff" : "#000",
                  border: `2px solid ${colorMap[subteam].buttonColor}`,
                }}
              >
                {subteam}
              </button>
            );
          })}

          <button
            className={`timeline-filter-btn ${activeFilter === "All" ? "active" : ""}`}
            onClick={() => setActiveFilter("All")}
            style={{
              backgroundColor: activeFilter === "All" ? "#333" : "#A4D65E",
              color: activeFilter === "All" ? "#fff" : "#000",
              border: "2px solid #333",
            }}
          >
            All
          </button>
        </div>
      </div>

      <div className="timeline">
        <VerticalTimeline>
          {filteredElements.map((element) => {
            const styles = colorMap[element.title] || defaultStyles;
            const isExpanded = expandedID === element.id;

            return (
              <VerticalTimelineElement
                key={element.id}
                date={element.date}
                dateClassName="timeline-date"
                contentStyle={styles.contentStyle}
                contentArrowStyle={styles.contentArrowStyle}
                iconStyle={styles.iconStyle}
              >
                <div
                  className="timeline-card"
                  onClick={() => handleExpand(element.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleExpand(element.id);
                    }
                  }}
                >
                  <div
                    className={`timeline-card-content ${
                      isExpanded ? "timeline-card-content-expanded" : ""
                    }`}
                  >
                    <div className="timeline-left">
                      <h3 className="timeline-title">{element.title}</h3>
                      <h4 className="timeline-event-date">{element.date}</h4>
                      <h4 className="timeline-title-description">
                        {element.titleDescription}
                      </h4>

                      {isExpanded && (
                        <p className="timeline-description">
                          {element.description}
                        </p>
                      )}

                      <button
                        className="timeline-expand-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExpand(element.id);
                        }}
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    </div>

                    <div className="timeline-right">
                      <img
                        src={element.img}
                        alt={element.alt}
                        className="timeline-image"
                      />
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;