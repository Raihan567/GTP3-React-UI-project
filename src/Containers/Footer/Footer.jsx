import React from "react";
import "./Footer.css";
import gpt from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className="gtp3__footer section__padding">
      <div className="gtp3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the <br /> future before others
        </h1>
      </div>

      <div className="gtp3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gtp3__footer-links">
        <div className="gtp3__footer-links_logo">
          <img src={gpt} alt="gpt" />
          <p>
            Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="gtp3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gtp3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gtp3__footer-links_div">
          <h4>Get in touch</h4>
          <p>
            Crechterwoord K12 <br /> 182 DK Alknjkcb
          </p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gtp3__footer-copyright">
        <p>Designed and developed by <span className="gradient__text">Abu-Raihan</span> Copyright @2022</p>
      </div>
    </div>
  );
};

export default Footer;
