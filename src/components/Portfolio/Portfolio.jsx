import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";  

import sidebar from "../../img/sidebar.jpg";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.jpg";
import ecommerce from "../../img/ecommerce.jpg";

// Example videos (not used in this case anymore)
const videos = [
  { img: ecommerce, alt: "Ecommerce" },
  { img: musicapp, alt: "Music App" },
  { img: hoc, alt: "HOC" },
  { img: sidebar, alt: "Sidebar" },
];

const Portfolio = () => {
  const { darkMode } = useContext(themeContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* Heading */}
      <span style={{ color: darkMode ? "white" : "black" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
        {videos.map(({ img, alt }, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={alt} onClick={openModal} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Error Modal */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog modal-dialog-centered modal-sm" role="document"> 
            <div className="modal-content"> 
              <div className="modal-body text-center p-lg-4"> 
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                  <circle className="path circle" fill="none" stroke="#db3646" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" /> 
                  <line className="path line" fill="none" stroke="#db3646" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3" />
                  <line className="path line" fill="none" stroke="#db3646" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2" /> 
                </svg> 
                <h4 className="text-danger mt-3">Coming Soon!</h4> 
                <p className="mt-3">Currently Video Not available, Please try after some time.</p>
                <button type="button" className="btn btn-sm mt-3 btn-danger" onClick={closeModal}>Ok</button> 
              </div> 
            </div> 
          </div> 
        </div>
      )}
    </div>
  );
};

export default Portfolio;
