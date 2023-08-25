import Landing from "./Components/Landing/Landing";
import TextArea from "./Components/TextArea/TextArea";
import Contact from "./Components/Contact/Contact";
import ScrollSection from "./Components/ScrollSection/ScrollSection";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={FadeIn()} delay={0}>
          <Landing />
        </Animator>
        <Animator animation={FadeOut()} delay={1}>
          <Landing />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={FadeIn()} delay={1}>
          <TextArea />
        </Animator>
        <Animator animation={FadeOut()} delay={2}>
          <TextArea />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeIn()} delay={2}>
          <Contact />
        </Animator>
        <Animator animation={FadeOut()} delay={3}>
          <Contact />
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={FadeIn()} delay={3}>
          <ScrollSection />
        </Animator>
        <Animator animation={FadeOut()} delay={4}>
          <ScrollSection />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Sticky(), MoveIn(1000, -1000), Fade())}>
          <h2>Contact information</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Sticky(), MoveIn(1000, -1000), Fade())}>
          <h2>More details</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Sticky(), MoveIn(1000, -1000), Fade())}>
          <h2>Additional content</h2>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
