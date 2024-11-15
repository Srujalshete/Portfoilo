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

const transition = { duration: 2, type: "spring" };

const floatingDivs = [
  { img: crown, text1: "Full Stack Developer", text2: "", initialPos: { top: "-2rem", left: "74%" }, whileInViewPos: { left: "54%" } },
  { img: thumbup, text1: "", text2: "React Developer", initialPos: { left: "9rem", top: "18rem" }, whileInViewPos: { left: "0rem" } },
];

const Intro = () => {
  const { state: { darkMode } } = useContext(themeContext);

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>SRUJAL SHETE</span>
          <span className="i-description" style={{ color: darkMode ? "#D3D3D3" : "black" }}>
  As a proficient Full-Stack Developer, I specialize in crafting dynamic and responsive user interfaces with React and Next.js. My expertise extends to backend technologies like Node.js and NestJS, as well as databases such as MongoDB. With a strong command of JavaScript and Express.js, I ensure seamless integration and functionality across the entire application stack.
</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <img src={Github} alt="Github" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>

      <div className="i-right">
        <img src={boys} alt="Boys" />
        <motion.img
          initial={{ left: "56%" }}
          whileInView={{ left: "-15%" }}
          transition={transition}
          src={glassesimoji}
          alt="Glasses Emoji"
          className="emoji-img"
          style={{ width: '200px', height: 'auto' }}
        />

        {floatingDivs.map((div, index) => (
   <motion.div
   key={index}
   initial={div.initialPos}
   whileInView={div.whileInViewPos}
   transition={transition}
   className="floating-div"
   style={{ width: '250px', height: index === 1 ? '120px' : '100px' }} // Larger size for React Developer
 >
   <FloatinDiv img={div.img} text1={div.text1} text2={div.text2} />
 </motion.div>       
        ))}

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
