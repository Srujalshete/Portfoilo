import React, { useContext } from "react";
import "./Card.css";
import { themeContext } from "../../Context";  

const Card = React.memo(({ emoji, heading, detail, color, link }) => {
  const handleLearnMore = () => {
    window.open(link, "_blank");
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="card" style={{ borderColor: color }}>
      <img src={emoji} alt={`${heading} emoji`} />
      <span>{heading}</span>
      <span style={{ color: darkMode ? "#D3D3D3" : "black" }}>{detail}</span>
      <button type="button" className="c-button" onClick={handleLearnMore}>
        LEARN MORE
      </button>
    </div>
  );
});

export default Card;
