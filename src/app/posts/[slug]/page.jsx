import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import { Comment } from "@/components/comment/Comment";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}> {data?.title}</h1>

          <div className={styles.postUser}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" className={styles.userImage} fill />
            </div>
            <div className={styles.userTexts}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.created.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" className={styles.image} fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.actualContent}>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          ></div>
          <Comment postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
