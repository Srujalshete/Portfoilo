import React, { useContext } from "react";
import "./Intro.css";
import boys from "../../img/boys.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>SRUJAL SHETE</span>
          <span>
          "I'm a proficient full-stack developer, primarily focused on React for frontend development,
          <br/> yet equipped with comprehensive backend technology knowledge and hands-on experience."
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
         <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>  
  
      {/* right image side */}
      <div className="i-right">
      <img src={boys} alt="" />
         {/* <img src={boys} alt="Boy" style={{ width: '500px', height: '500px', alignSelf: 'flex-end',}} />  */}
        {/* animation */}
        <motion.img
          initial={{ left: "56%" }}
          whileInView={{ left: "-15%" }}
          transition={transition}
          src={glassesimoji}
          alt="Glasses Emoji"
          style={{ width: '150px', height: 'auto' }}
        />

        <motion.div
          initial={{ top: "-2rem", left: "74%" }}
          whileInView={{ left: "54%" }}
          transition={transition}
          className="floating-div"
          style={{ width: 'auto', height: '100px' }}
        >
          <FloatinDiv img={crown} text1="Full Stack" text2="Developer" />
        </motion.div>

        {/* Adjust the size of the thumbup image */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ width: 'auto', height: '200px' }}
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="React" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      </div>
  );
};

export default Intro;
