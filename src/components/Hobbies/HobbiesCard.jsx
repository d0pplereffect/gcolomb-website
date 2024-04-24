import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./HobbiesCard.module.scss";

export const HobbiesCard = ({ hobbie: { imageSrc, title, description } }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
