import React from "react";
import { getImageUrl } from "./../../utils";

import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        aperiam velit dolorum ?
      </div>
      <div className={styles.contacts}>
        <ul>
          <li>
            <img
              src={getImageUrl("images/icons/discord-icon.png")}
              alt="Discord logo"
            />
            <span>d0ppler_effect</span>
          </li>
          <li>
            <img
              src={getImageUrl("images/icons/mail-icon.svg")}
              alt="Mail icon"
            />
            <a href="mailto:g.m.colomb@gmail.com">g.m.colomb@gmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
