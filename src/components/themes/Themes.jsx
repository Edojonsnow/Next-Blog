"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./themes.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const Themes = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" width={20} height={20} alt="moon" />
      <div className={styles.ball}></div>
      <Image src="/sun.png" width={20} height={20} alt="sun" />
    </div>
  );
};

export default Themes;
