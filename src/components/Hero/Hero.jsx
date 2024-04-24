import React from "react";
import styles from "./Hero.module.scss";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Lorem ipsum,</h1>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          totam, inventore fugiat fugit accusamus explicabo omnis, atque iste
          doloremque.
        </p>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("images/profil.png")}
        alt="Hero image of me"
      />
    </section>
  );
};
