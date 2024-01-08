import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import SidebarVideo from "../../img/Sidebar.mp4"; // Import local video files
import EcommerceVideo from "../../img/Ecommmerce.mp4";
import HOCVideo from "../../img/hoc.mp4";
import MusicAppVideo from "../../img/musicapp.mp4";

import sidebar from "../../img/sidebar.jpg";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.jpg";
import ecommerce from "../../img/ecommerce.jpg";
import { themeContext } from "../../Context"; // Renamed context for convention

const Portfolio = () => {
  const { darkMode, toggleDarkMode } = useContext(themeContext);

  const [isOpen, setOpen] = useState(false);
  const [videoSource, setVideoSource] = useState(null);

  const openModal = (source) => {
    setVideoSource(source);
    setOpen(true);
  };

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider">
        <SwiperSlide>
          <img src={ecommerce} alt="Ecommerce" onClick={() => openModal(EcommerceVideo)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="Music App" onClick={() => openModal(MusicAppVideo)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="HOC" onClick={() => openModal(HOCVideo)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sidebar} alt="Sidebar" onClick={() => openModal(SidebarVideo)} />
        </SwiperSlide>
      </Swiper>

      {/* Video Modal */}
      <ModalVideo
        channel=''
        isOpen={isOpen}
        videoUrl={videoSource}
        onClose={() => {
          setOpen(false);
          setVideoSource(null);
        }}
      />
    </div>
  );
};

export default Portfolio;
