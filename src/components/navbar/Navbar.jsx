import styles from "./navbar.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok" />
        <Image src="/youtube.png" width={24} height={24} alt="youtube" />
      </div>
      <div className={styles.logo}>SNOW`S CLOSET</div>
      <div className={styles.links}>
        <Link href="/"> Homepage</Link>
        <Link href="/"> Contact</Link>
        <Link href="/"> About</Link>
      </div>
    </div>
  );
};

export default Navbar;
