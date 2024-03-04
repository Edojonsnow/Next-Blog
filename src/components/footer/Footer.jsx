import styles from "./footer.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h1 className={styles.logo}>SNOW'S CLOSET</h1>
        </div>
        <p className={styles.infoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={24} height={24} alt="facebook" />
          <Image src="/instagram.png" width={24} height={24} alt="instagram" />
          <Image src="/tiktok.png" width={24} height={24} alt="tiktok" />
          <Image src="/youtube.png" width={24} height={24} alt="youtube" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link className={styles.listItems} href="/">
            Homepage
          </Link>
          <Link className={styles.listItems} href="/">
            Contact
          </Link>
          <Link className={styles.listItems} href="/">
            About
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link className={styles.listItems} href="/">
            Personal
          </Link>
          <Link className={styles.listItems} href="/">
            Tech
          </Link>
          <Link className={styles.listItems} href="/">
            Social
          </Link>
          <Link className={styles.listItems} href="/">
            Books
          </Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link className={styles.listItems} href="/">
            Instagram
          </Link>
          <Link className={styles.listItems} href="/">
            Twitter
          </Link>
          <Link className={styles.listItems} href="/">
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
