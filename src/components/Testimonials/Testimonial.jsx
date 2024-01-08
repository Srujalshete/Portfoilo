import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 
//import SwiperCore, { Pagination } from 'swiper';
//import { Pagination } from "swiper";
import { Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";



const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The application is incredibly well-crafted, offering a seamless experience and addressing my needs effectively. The developer has showcased remarkable skill in creating such a user-friendly and functional app. Kudos to the developer for their exceptional work!",
    },
    {
      img: profilePic2,
      review:
         "I'm thoroughly impressed by the application's performance and the developer's dedication to delivering such a polished product. Well done!",
    },
    {
      img: profilePic3,
      review:
      "This app exceeds expectations! The developer's ingenuity shines through its smooth operation and thoughtful features. Highly commendable work!",
    },
    {
      img: profilePic4,
      review:
      "Both the application and its developer are outstanding! The app's seamless performance reflects the developer's expertise and commitment to excellence. Exceptional job all around!",
}
];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;


 