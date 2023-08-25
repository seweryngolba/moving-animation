import React from "react";
import {
  Animator,
  batch,
  MoveIn,
  Sticky,
  ScrollPage,
} from "react-scroll-motion";

const ScrollSectionContent = () => {
  return (
    <>
      <ScrollPage page={3}>
        <Animator animation={batch(Sticky(), MoveIn(1000, 0))} delay={3}>
          <h2>Contact information</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Sticky(), MoveIn(1000, 0))} delay={4}>
          <h2>More details</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Sticky(), MoveIn(1000, 0))} delay={5}>
          <h2>Additional content</h2>
        </Animator>
      </ScrollPage>
    </>
  );
};

export default ScrollSectionContent;
