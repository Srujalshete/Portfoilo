import React from "react";
import './FloatingDiv.css';

const FloatingDiv = ({ img, text1, text2 }) => {
  return (
    <div className="floatingDiv">
      <div className="floating-div-content" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <img src={img} alt="Icon" style={{ width: '15px', height: '15px' }} />
        <div style={{ margin: 0 }}> 
          <span className="text1">{text1}</span>  
          <span className="text2">{text2}</span> 
        </div>
      </div>
    </div>
  );
};

export default FloatingDiv;
