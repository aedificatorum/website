import React from "react";

const Footer = props => {
  const { scrollToTop } = props;

  return (
    <footer className="footer mt-auto">
        <div className="chevron mr-3">
          <a href="/" onClick={scrollToTop}>
            <i className="fas fa-chevron-up" />
          </a>
        </div>
      <div className="py-3">
        <div className="text-muted">
          <a href="https://github.com/aedificatorum" target="blank">
            <i className="fab fa-github-square fa-3x px-2" />
          </a>
          <a href="https://twitter.com/aedificatorum" target="blank">
            <i className="fab fa-twitter-square fa-3x px-2" />
          </a>
          <a href="https://twitter.com/aedificatorum" target="blank">
            <i className="fas fa-square fa-3x px-2" />
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
