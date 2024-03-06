"use client";

import React from "react";
import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.title} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setIsOpen(!open)}>
          <Image src="/plus.png" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textBox}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell us something interesting..."
        />
      </div>
    </div>
  );
};

export default WritePage;
