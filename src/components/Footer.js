import React from "react";
import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram /> <FaTwitter /> <FaFacebook /> 
      </div>
      <p> &copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;