"use client";

import React, { useState } from "react";
import styles from "./comment.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { POST } from "@/app/api/comments/route";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw new Error("Failed");
  }
  return data;
};

export const Comment = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };
  return (
    <div className={styles.commentContainer}>
      <h1>Comments</h1>

      {status === "authenticated" ? (
        <div className={styles.inputContainer}>
          <textarea
            className={styles.input}
            name=""
            placeholder="write a comment..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className={styles.send} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <p>Please login to comment</p>
      )}

      {isLoading
        ? "Loading"
        : data?.map((item) => (
            <div className={styles.comments} key={item._id}>
              <div className={styles.user}>
                <Image
                  src="/p1.jpeg"
                  className={styles.userImage}
                  width={35}
                  height={35}
                />
                <div className={styles.userDetails}>
                  {" "}
                  <span className={styles.commentUsername}>
                    {" "}
                    {item.user.name}
                  </span>
                  <span className={styles.commentDate}>
                    {item.created.substring(0, 10)}
                  </span>
                </div>
              </div>
              <p className={styles.commentText}>{item.desc}</p>
            </div>
          ))}
    </div>
  );
};
