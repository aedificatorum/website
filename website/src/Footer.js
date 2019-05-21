import React from "react";

const Footer = (props) => {
  const { scrollToTop } = props;

  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <span className="text-muted">
        <a href="/" onClick={scrollToTop}>To the top</a>
        <div>Built & Designed by Aedificatorum.</div>
        </span>

      </div>
    </footer>
  );
};

export default Footer;
