import React from "react";
import hobbies from "../../data/hobbies.json";
import { HobbiesCard } from "./HobbiesCard";
import styles from "./Hobbies.module.scss";

export const Hobbies = () => {
  return (
    <section className={styles.container} id="hobbies">
      <h2 className={styles.title}>Hobbies</h2>
      <div className={styles.hobbies}>
        {hobbies.map((hobbie, id) => {
          return <HobbiesCard key={id} hobbie={hobbie} />;
        })}
      </div>
    </section>
  );
};
