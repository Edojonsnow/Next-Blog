import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=personal"
          className={`${styles.category} ${styles.personal}`}
        >
          <Image
            src="/style.png"
            width={30}
            height={30}
            className={styles.image}
          />
          Personal
        </Link>
        <Link
          href="/blog?cat=tech"
          className={`${styles.category} ${styles.tech}`}
        >
          <Image
            src="/culture.png"
            width={30}
            height={30}
            className={styles.image}
          />
          Tech
        </Link>
        <Link
          href="/blog?cat=society"
          className={`${styles.category} ${styles.society}`}
        >
          <Image
            src="/travel.png"
            width={30}
            height={30}
            className={styles.image}
          />
          Society
        </Link>
        <Link
          href="/blog?cat=society"
          className={`${styles.category} ${styles.society}`}
        >
          <Image
            src="/travel.png"
            width={30}
            height={30}
            className={styles.image}
          />
          <span className={styles.text}>Society</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
