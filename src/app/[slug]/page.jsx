import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> Lorem Ipsum bitvhes </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" className={styles.userImage} fill />
            </div>
            <div className={styles.userTexts}>
              <span className={styles.username}></span>
              <span className={styles.date}></span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}></div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default SinglePage;
