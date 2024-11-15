import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Works = () => {
  const { state: { darkMode } } = useContext(themeContext);

  // Brands array for easier mapping
  const brands = [
    { src: Upwork, alt: "Upwork" },
    { src: Fiverr, alt: "Fiverr" },
    { src: Amazon, alt: "Amazon" },
    { src: Shopify, alt: "Shopify" },
    { src: Facebook, alt: "Facebook" }
  ];

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
          <span>Brands & Clients</span>
          <span style={{ color: darkMode ? "#D3D3D3" : "black" }}>
            Disclaimer: The brands and clients mentioned in this context are 
            <br />
            solely used for educational purposes. I have no association or 
            <br />
            intention to work with these companies in real-life scenarios. 
            <br />
            The references to these brands and clients are strictly for learning
            <br />
            and demonstration purposes within an educational context.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          {brands.map((brand, index) => (
            <div className="w-secCircle" key={index}>
              <img src={brand.src} alt={brand.alt} />
            </div>
          ))}
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
