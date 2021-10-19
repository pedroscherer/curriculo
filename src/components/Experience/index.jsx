import React from "react";
import "./index.css";

export default function Experience() {
  const experiences = [
    {
      skill: "React.js",
      level: "35%",
    },
    {
      skill: "Redux.js",
      level: "20%",
    },
    {
      skill: "Node.js",
      level: "15%",
    },
    {
      skill: "HTML, CSS, JavaScript",
      level: "30%",
    },
    {
      skill: "MongoDB",
      level: "20%",
    },
    {
      skill: "GitHub",
      level: "40%",
    },
  ];
  return (
    <React.Fragment>
      <div className="experience-content">
        {experiences.map((item, index) => (
          <div className="experience-item" key={index}>
            <span className="skill-name">{item.skill}</span>
            <div className="level-bar">
              <div
                className="level-percent"
                style={{ width: item.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
