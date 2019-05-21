import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <div className="row">
        <div className="col-4 offset-md-1">
          <h4 className="about-content">Builder - Architect Maker</h4>
          <h5>
            In Latin <i>aedificatorum</i> is the genitive masculine plural of
            aedificator.
          </h5>
          <h5>Genetive is the case that expresses possesion.</h5>
        </div>
        <div className="col-6 offset-md-1">
          <h4 className="about-content">Who are we?</h4>
          <h5><b>Aedificatorum</b> is a shared project created by Céline & Tim.</h5>

          <h4>Céline</h4>
          <h4>Tim</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
