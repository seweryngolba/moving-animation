// App.js

import React from "react";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import Landing from "./Components/Landing/Landing";
import TextArea from "./Components/TextArea/TextArea";
import Contact from "./Components/Contact/Contact";
import ScrollSectionContent from "./Components/ScrollSection/ScrollSection"; // Import nowego komponentu

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
      <ScrollSectionContent />
    </ScrollContainer>
  );
}

export default App;
