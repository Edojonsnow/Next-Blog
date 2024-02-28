import styles from "./navbar.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Auth from "../auth/Auth";
import Themes from "../themes/Themes";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok" />
        <Image src="/youtube.png" width={24} height={24} alt="youtube" />
      </div>
      <h1 className={styles.logo}>SNOW`S CLOSET</h1>
      <div className={styles.links}>
        <Themes />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/">
          Contact
        </Link>
        <Link className={styles.link} href="/">
          About
        </Link>
        <Auth />
      </div>
    </div>
  );
};

export default Navbar;
