// App.js

import React from "react";
import {
  Animator,
  Fade,
  ScrollContainer,
  ScrollPage,
  batch,
  Sticky,
  Move,
} from "react-scroll-motion";
import Landing from "./Components/Landing/Landing";
import TextArea from "./Components/TextArea/TextArea";
import Contact from "./Components/Contact/Contact";
import Floating from "./Components/Floating/Floating";
import JumpIn from "./Components/JumpIn/JumpIn";

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Landing />
      </ScrollPage>
      <ScrollPage page={1}>
        <TextArea />
      </ScrollPage>
      <ScrollPage page={2}>
        <Contact />
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={batch(Sticky(), Fade())}>
          <Floating />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <div className="jumpCont">
          <div className="landAnime">
            <Animator animation={batch(Sticky(), Move(0, 1000))}></Animator>
          </div>
          <div className="boxy">
            <Animator animation={batch(Sticky(), Move(1000, 0))}></Animator>
          </div>
        </div>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
