import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color, link }) => {
  const handleLearnMore = () => {
    // Redirect to the specified link when the "Learn More" button is clicked
    window.open(link, "_blank"); // Opens link in a new tab/window
  };

  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" onClick={handleLearnMore}>
        LEARN MORE
      </button>
    </div>
  );
};

export default Card;
