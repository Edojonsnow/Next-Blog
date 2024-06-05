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
          <span className={styles.date}> {item.created.substring(0, 10)}</span>
          <span className={styles.postCategory}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h2 className={styles.postTitle}>{item.title} </h2>
        </Link>
        <div className={styles.postText}>{item.desc.substring(0, 50)}</div>
        <Link href={`/posts/${item.slug}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
