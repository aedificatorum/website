import React from "react";

const Footer = () => {

  return (
    <footer className="footer mt-auto">
      <div className="py-5">
        <div className="text-center">
          <a href="https://github.com/aedificatorum" target="blank">
            <i className="fab fa-github fa-2x px-3" />
          </a>
          <a href="https://twitter.com/aedificatorum" target="blank">
            <i className="fab fa-twitter fa-2x px-3" />
          </a>
          <a href="https://twitter.com/aedificatorum" target="blank">
            <i className="fas fa-square fa-2x px-3" />
          </a>
        </div>
      </div>
      <div className="footer-bottom py-3">
        <span className="text-light">
          <div>Built & Designed by Aedificatorum.</div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
