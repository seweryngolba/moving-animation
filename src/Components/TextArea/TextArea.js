// TextArea.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TextArea.css";

const TextArea = ({ controls }) => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [boxPosition, setBoxPosition] = useState(0);

  const handleBoxVisible = () => {
    setBoxVisible(true);
  };

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    const triggerOffset = window.innerHeight * 0.8;
    const scrollDistance = Math.min(
      yOffset - triggerOffset,
      window.innerHeight
    );

    if (boxVisible) {
      setBoxPosition(scrollDistance);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [boxVisible]);

  const boxVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: boxVisible ? 900 : 0,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="container">
      <motion.div
        className="box"
        variants={boxVariants}
        initial="hidden"
        animate={controls}
        onAnimationComplete={handleBoxVisible}
      >
        {/* zawartość div box */}
      </motion.div>
      <motion.div
        className="textBox"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <h3>HELLO</h3>
        <p>lorem lorem lorem ...</p>
      </motion.div>
    </div>
  );
};

export default TextArea;
