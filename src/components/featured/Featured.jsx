import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Featured = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={styles.conatiner}>
      <h1 className={styles.title}> Welcome to my blog</h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            width={600}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem Ipsum</h1>
          <p className={styles.postInfo}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
