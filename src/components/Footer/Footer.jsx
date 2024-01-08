import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
     <img src={Wave} alt="" style={{ width: "100%" }} /> 
      <div className="f-content">
      <div className="icy-blur-stripe">
  <span className="email">
    <span className="text">srujalshete123@gmail.com</span>
  </span>
</div>
        <div className="f-icons">
          <a href="https://www.instagram.com/sujalrshete/" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/srujal-shete/" target="_blank" rel="noopener noreferrer">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/srujalshete" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
