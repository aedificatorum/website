import React from "react";
import "./App.css";
import About from "./About";
import { animateScroll as scroll, scroller } from "react-scroll";

const App = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = elementName => {
    scroller.scrollTo(elementName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <div>
      <img
        src="aedificatorum-logo.png"
        alt="aedificatorum-logo"
        className="logo-home"
      />
      <h1>We are Aedificatorum</h1>
      <h2>/ɑədɪfɪkætɒrʊəm/</h2>
      <div className="about-link">
        <a onClick={() => scrollTo("about")}>
          <h3>About</h3>
        </a>
      </div>
      <div name="about" className="container element">
        <h1>About</h1>
        <About />
      </div>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <p>spacer at the bottom</p>
      <a onClick={scrollToTop}>To the top</a>
    </div>
  );
};

export default App;
