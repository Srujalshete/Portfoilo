import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { UilInstagram, UilLinkedin, UilGithub } from "@iconscout/react-unicons";

const socialLinks = [
  {
    href: "https://www.instagram.com/sujalrshete/",
    icon: <UilInstagram color="white" size={"3rem"} />,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/srujal-shete/",
    icon: <UilLinkedin color="white" size={"3rem"} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/srujalshete",
    icon: <UilGithub color="white" size={"3rem"} />,
    label: "GitHub",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Wave decoration" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="icy-blur-stripe">
          <span className="email">
            <span className="text">srujalshete123@gmail.com</span>
          </span>
        </div>
        <div className="f-icons">
          {socialLinks.map(({ href, icon, label }, index) => (
            <a 
              key={index} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
