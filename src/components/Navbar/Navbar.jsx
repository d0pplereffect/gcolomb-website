import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Guillaume Colomb
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("images/icons/times-icon.svg")
              : getImageUrl("images/icons/menu-icon.svg")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul
          className={`${styles.menuItems}  ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#experiences">Expériences</a>
          </li>
          <li>
            <a href="#hobbies">Hobbies</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
