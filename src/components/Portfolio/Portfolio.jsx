import React, { useContext, useState, useEffect } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";

import ChatWave from "../../img/sidebar.jpg";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.jpg";
import ecommerce from "../../img/ecommerce.jpg";

const videos = [
  {
    img: ecommerce,
    alt: "Ecommerce",
    videoUrl: require("../../img/Ecommmerce.mp4"),
    codeUrl: "https://github.com/Srujalshete/Netflix-clone-app.git",
  },
  {
    img: musicapp,
    alt: "Music App",
    videoUrl: require("../../img/musicapp.mp4"),
    codeUrl:
      "https://github.com/Srujalshete/Saloon-Appointment-Booking-Application.git",
  },
  {
    img: hoc,
    alt: "HOC",
    videoUrl: require("../../img/hoc.mp4"),
    codeUrl: "https://github.com/Srujalshete/ChatWave.git",
  },
  {
    img: ChatWave,
    alt: "ChatWave",
    videoUrl: require("../../img/Sidebar.mp4"),
    codeUrl: "https://github.com/Srujalshete/Heart-Disease-Prediction-App.git",
  },
];

const Portfolio = () => {
  const { darkMode } = useContext(themeContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "black" }}>
        Recent Projects
      </span>
      <span>Portfolio</span>
      <p
        style={{
          color: darkMode ? "white" : "gray",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Click on an image to see the video and project code, Also you can find
        more projects on Github.
        <span style={{ color: "red", fontSize: "0.8rem" }}>*</span>
      </p>

      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        grabCursor={true}
        className="portfolio-slider"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <img
              src={video.img}
              alt={video.alt}
              onClick={() => openModal(video)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && selectedVideo && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                <video controls style={{ width: "100%" }}>
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-code"
                  onClick={() => window.open(selectedVideo.codeUrl, "_blank")}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    style={{ marginRight: "5px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3L9.75 19.5"
                    />
                  </svg>
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
