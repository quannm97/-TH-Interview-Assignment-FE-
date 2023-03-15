import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <dive className={styles.footerCustom}>
      <h2>CONTACT</h2>

      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i>35/93 Hoang Mai st. Ha Noi
        </li>
        <li>
          <i className="fas fa-envelope"></i>quan.nm.dever@gmail.com
        </li>
        <li>
          <i className="fas fa-mobile-alt"></i>+84 977 272 872
        </li>
        <li>
        <i class="fab fa-github"></i><a href="https://github.com/quannm97/-TH-Interview-Assignment-FE-">Github</a>
        </li>
      </ul>
    </dive>
  );
};

export default Footer;
