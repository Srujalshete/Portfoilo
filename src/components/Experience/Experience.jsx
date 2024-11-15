import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const achievementsData = [
  { value: "1+", label: "years", title: "Experience" },
  { value: "7+", label: "completed", title: "Projects" },
  { value: "2+", label: "companies", title: "Work" },
];

const Achievement = ({ value, label, title, darkMode }) => (
  <div className="achievement">
    <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>
      {value}
    </div>
    <span style={{ color: darkMode ? 'white' : '' }}>{label} </span>
    <span>{title}</span>
  </div>
);

const Experience = () => {
  const { state: { darkMode } } = useContext(themeContext);

  return (
    <div className="experience" id="experience">
      {achievementsData.map((achievement, index) => (
        <Achievement key={index} darkMode={darkMode} {...achievement} />
      ))}
    </div>
  );
};

export default Experience;
