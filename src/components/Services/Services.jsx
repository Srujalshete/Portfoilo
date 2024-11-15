import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './SrujalCV.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane style={{ color: darkMode ? "#D3D3D3" : "black" }}>
        As a Full-stack developer, I provide comprehensive services  
        encompassing web and mobile app development,<br/> database management, API creation, UI/UX design, DevOps, testing, 
        collaboration, documentation,  <br/>and adherence to Agile methodologies.
  Create tailored applications with a focus on user experience, 
        <br/>offering end-to-end solutions spanning front-end to back-end development.
        </spane>
        <a href={Resume} download style={{ marginTop: '-8px' }}>
  <button className="button s-button">Download CV</button>
</a>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frontend"}
            detail={"HTML, CSS, JavaScript, React.js/React Native, Bootstrap, Material UI"}
            link="https://github.com/thedaviddias/Front-End-Checklist.git"
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "3rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={"Node.js, Express.js, Python, Java, C++, API keys"}
            link="https://github.com/ishtms/learn-nodejs-hard-way.git"
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "20rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Database"}
            detail={"MySQL, PostgreSQL, MongoDB, SQLite, Firebase Firestore, Amazon DynamoDB"}
            color="rgba(252, 166, 31, 0.45)"
            link="https://github.com/netdata/netdata.git"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
