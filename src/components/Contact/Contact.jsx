import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const { state: { darkMode } } = useContext(themeContext);
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_sdwp5lj",
        "template_a8vugoo",
        form.current,
        "RGNf3rD-YP-cWct9b"
      );
      console.log(result.text);
      setIsSubmitted(true);
      form.current.reset(); // Reset the form
    } catch (error) {
      console.error("Failed to send email:", error.text);
    }
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "black" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      {/* Right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required />
          <input type="submit" value="Send" className="button" />
          {isSubmitted && <span>Thanks for contacting me!</span>}
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
