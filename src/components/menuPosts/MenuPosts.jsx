import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";
const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} fill src="/p1.jpeg"></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.personal}`}>
            Personal
          </span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className={styles.details}>
            <span className={styles.username}>Osahon Oronsaye</span>
            <span className={styles.date}>02.03.2024</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} fill src="/p1.jpeg"></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.tech}`}>Tech</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className={styles.details}>
            <span className={styles.username}>Osahon Oronsaye</span>
            <span className={styles.date}>02.03.2024</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} fill src="/p1.jpeg"></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.social}`}>Social</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className={styles.details}>
            <span className={styles.username}>Osahon Oronsaye</span>
            <span className={styles.date}>02.03.2024</span>
          </div>
        </div>
      </Link>

      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image className={styles.image} fill src="/p1.jpeg"></Image>
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.books}`}>Books</span>
          <p className={styles.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
          <div className={styles.details}>
            <span className={styles.username}>Osahon Oronsaye</span>
            <span className={styles.date}>02.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
