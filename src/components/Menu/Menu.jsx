import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.fadedTitle}>What's Hot?</h4>
      <h2 className={styles.subtitle}>Most Popular</h2>
      <MenuPosts withImage={false} />
      <div className={styles.bottomMenu}>
        <h4 className={styles.fadedTitle}>Discover by topic</h4>
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
        <div className={styles.editorSubtitle}>
          {" "}
          <h4 className={styles.fadedTitle}>Chosen by the editor</h4>
          <h2 className={styles.subtitle}>Editor's Pick</h2>
        </div>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
