// App.js
import React, { useState } from "react";
import { useAnimation } from "framer-motion";
import Landing from "./Components/Landing/Landing";
import TextArea from "./Components/TextArea/TextArea";
import Contact from "./Components/Contact/Contact";

function App() {
  const textAreaControls = useAnimation();
  const [boxVisible, setBoxVisible] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    const triggerOffset = window.innerHeight * 0.8;

    if (yOffset > triggerOffset) {
      textAreaControls.start({ opacity: 1 });
      setBoxVisible(true);
    } else {
      textAreaControls.start({ opacity: 0 });
      setBoxVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Landing />
      <TextArea controls={textAreaControls} />
      <Contact boxVisible={boxVisible} />
    </>
  );
}

export default App;
