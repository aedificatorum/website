import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    return (
      <div>
        <img
          src="aedificatorum-logo.png"
          alt="aedificatorum-logo"
          className="logo-home"
        />
        <h1>We are Aedificatorum</h1>
        <h2>/ɑədɪfɪkætɒrʊəm/</h2>
        <NavLink to="/about">
          <h3>About</h3>
        </NavLink>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" />
        </Switch>      
        {/* <a className="about" to="about" onClick={() => this.scrollTo()}>
            About
          </a>
        <Element name="scroll-to-element" className="element">
          <About />
        </Element>

        <a onClick={this.scrollToTop}>To the top</a> */}
      </div>
    );
  }
}

export default App;
