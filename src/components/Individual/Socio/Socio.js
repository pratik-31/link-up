import React from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Socio.css";

const Socio = () => {
  return (
    <div>
      <div className="social-menu">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <i class="fab  fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="blank">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/" target="blank">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Socio;
