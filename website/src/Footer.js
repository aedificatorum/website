import React from "react";

const Footer = (props) => {
  const { scrollToTop } = props;

  return (
    <footer className="footer mt-auto">
    <div className="py-3">
        <span className="text-muted">
        <a href="/" onClick={scrollToTop}><i class="fas fa-chevron-up"></i></a>
       
        <div>LINKS</div>
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
