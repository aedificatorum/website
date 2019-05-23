import React from "react";

const Footer = props => {
  const { scrollToTop } = props;

  return (
    <footer className="footer mt-auto">
      <div className="py-3">
        <span className="text-muted">
          <a href="/" onClick={scrollToTop}>
            <i className="fas fa-chevron-up" />
          </a>
          <div>
            <a href="https://github.com/aedificatorum" target="blank">
              <i className="fab fa-github-square fa-3x" />
            </a>
            <a href="https://twitter.com/aedificatorum" target="blank">
              <i class="fab fa-twitter-square fa-3x" />
            </a>
          </div>
        </span>
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
