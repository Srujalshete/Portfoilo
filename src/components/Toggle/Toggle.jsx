import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const { state: { darkMode }, dispatch } = useContext(themeContext);

  const handleClick = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={{ left: darkMode ? "2px" : "auto", right: darkMode ? "auto" : "2px" }}
      />
    </div>
  );
};

export default Toggle;
