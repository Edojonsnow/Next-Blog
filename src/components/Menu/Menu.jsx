import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3>What's Hot?</h3>
      <h2>Most Popular</h2>
      <MenuPosts withImage={false} />
      <div className={styles.bottomMenu}>
        <h3>Discover by topic</h3>
        <h2>Categories</h2>
        <div className={styles.categories}>
          <Link
            href="/blog"
            className={`${styles.category} ${styles.personal}`}
          >
            {" "}
            Personal
          </Link>
          <Link
            href="/blog"
            className={`${styles.category} ${styles.personal}`}
          >
            Tech
          </Link>
          <Link
            href="/blog"
            className={`${styles.category} ${styles.personal}`}
          >
            Social
          </Link>
          <Link
            href="/blog"
            className={`${styles.category} ${styles.personal}`}
          >
            Books
          </Link>
          <Link
            href="/blog"
            className={`${styles.category} ${styles.personal}`}
          >
            Games
          </Link>
        </div>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
