"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const storage = getStorage(app);

const WritePage = () => {
  const [open, setIsOpen] = useState(false);

  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  if (typeof window !== "undefined") {
    // browser code
    useEffect(() => {
      const upload = () => {
        const name = new Date().getTime + file.name;
        const storageRef = ref(storage, name);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };
      file && upload();
    }, [file]);
  }

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        image: media,
        desc: value,
        slug: title,
        catSlug: "personal",
      }),
    });
    return res.json();
  };

  if (status === "loading") {
    return <div>Loading . . . </div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setIsOpen(!open)}>
          <Image src="/plus.png" width={30} height={30} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" width={30} height={30} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" width={30} height={30} />
            </button>
            <button className={styles.addButton}>
              <Image src="/export.png" width={30} height={30} />
            </button>
          </div>
        )}
        <input
          className={styles.textBox}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tell us something interesting..."
        />
      </div>
      <div className={styles.publish} onClick={handleSubmit}>
        Publish
      </div>
    </div>
  );
};

export default WritePage;
