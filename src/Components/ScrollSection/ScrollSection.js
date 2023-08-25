import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  MoveIn,
  Sticky,
} from "react-scroll-motion";

import "./ScrollSection.css";

const ScrollSection = () => {
  return (
    <div className="scrollCont">
      <ScrollContainer className="scrollCont">
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(1000, -1000))}>
            <h2>Contact information</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(1000, -1000))}>
            <h2>More details</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(1000, -1000))}>
            <h2>Additional content</h2>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default ScrollSection;
