// Contact.js
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = ({ boxVisible }) => {
  const contactBoxVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: boxVisible ? 600 : 0,
      transition: { duration: 2 },
    },
  };

  return (
    <div className="contCont">
      <motion.div
        className="contactBox"
        variants={contactBoxVariants}
        initial="hidden"
        animate={boxVisible ? "visible" : "hidden"}
      ></motion.div>
      <div className="contactText">
        <h3>CONTACT</h3>
        <p>HELLO IN CONTACTS</p>
      </div>
    </div>
  );
};

export default Contact;
