import React, { Component } from "react";
import "./App.css";
import About from "./About";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const App = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  return (
    <div>
      <img
        src="aedificatorum-logo.png"
        alt="aedificatorum-logo"
        className="logo-home"
      />
      <p>lol the other p?</p>
      <h1>We are Aedificatorum</h1>
      <h2>/ɑədɪfɪkætɒrʊəm/</h2>
      <a onClick={() => scrollTo()}>
        <h3>About</h3>
      </a>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>
      <p>spacer at the top</p>

      <Element name="scroll-to-element" className="element">
        <h1>About</h1>
        <About />
      </Element>
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
}

export default App;
