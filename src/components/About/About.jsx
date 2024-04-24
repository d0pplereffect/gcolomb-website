import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À proros</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("images/tag.svg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Développeur frontend</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis totam, inventore fugiat fugit accusamus explicabo
                omnis.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Désigner UX/UI</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis totam, inventore fugiat fugit accusamus explicabo
                omnis.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
