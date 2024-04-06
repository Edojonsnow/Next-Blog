import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ key, item }) {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="personal" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}> 11.03.2024 </span>
          <span className={styles.postCategory}>Personal</span>
        </div>
        <Link href="/">
          <h2 className={styles.postTitle}>{item.title} </h2>
        </Link>
        <p className={styles.postText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link href="/" className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
