"use client";

import React, { useContext } from "react";
import Image from "next/image";
import styles from "./themes.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const Themes = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" width={16} height={16} alt="moon" />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", right: 1 }
            : { backgroundColor: "white", left: 1 }
        }
      ></div>
      <Image src="/sun.png" width={16} height={16} alt="sun" />
    </div>
  );
};

export default Themes;
