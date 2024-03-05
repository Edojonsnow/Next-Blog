import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipi
          </h1>

          <div className={styles.postUser}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" className={styles.userImage} fill />
            </div>
            <div className={styles.userTexts}>
              <span className={styles.username}>Alexander Oronsaye</span>
              <span className={styles.date}>12.03.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" className={styles.image} fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.actualContent}>
          <div className={styles.postContent}>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <br />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br /> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.{" "}
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br /> Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.{" "}
            </p>
          </div>
          <div className={styles.commentContainer}>
            <h1>Comments</h1>

            <div className={styles.inputContainer}>
              <textarea
                className={styles.input}
                name=""
                placeholder="write a comment..."
              ></textarea>
              <button className={styles.send}>Send</button>
            </div>

            <div className={styles.comments}>
              <div className={styles.user}>
                <Image
                  src="/p1.jpeg"
                  className={styles.userImage}
                  width={35}
                  height={35}
                />
                <div className={styles.userDetails}>
                  {" "}
                  <span className={styles.commentUsername}> Daniel Olori</span>
                  <span className={styles.commentDate}>12.03.2024</span>
                </div>
              </div>
              <p className={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={styles.comments}>
              <div className={styles.user}>
                <Image
                  src="/p1.jpeg"
                  className={styles.userImage}
                  width={35}
                  height={35}
                />
                <div className={styles.userDetails}>
                  {" "}
                  <span className={styles.commentUsername}> Daniel Olori</span>
                  <span className={styles.commentDate}>12.03.2024</span>
                </div>
              </div>
              <p className={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={styles.comments}>
              <div className={styles.user}>
                <Image
                  src="/p1.jpeg"
                  className={styles.userImage}
                  width={35}
                  height={35}
                />
                <div className={styles.userDetails}>
                  {" "}
                  <span className={styles.commentUsername}> Daniel Olori</span>
                  <span className={styles.commentDate}>12.03.2024</span>
                </div>
              </div>
              <p className={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={styles.comments}>
              <div className={styles.user}>
                <Image
                  src="/p1.jpeg"
                  className={styles.userImage}
                  width={35}
                  height={35}
                />
                <div className={styles.userDetails}>
                  {" "}
                  <span className={styles.commentUsername}> Daniel Olori</span>
                  <span className={styles.commentDate}>12.03.2024</span>
                </div>
              </div>
              <p className={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div className={styles.comments}>
              <div className={styles.user}>
                <Image
                  src="/p1.jpeg"
                  className={styles.userImage}
                  width={35}
                  height={35}
                />
                <div className={styles.userDetails}>
                  {" "}
                  <span className={styles.commentUsername}> Daniel Olori</span>
                  <span className={styles.commentDate}>12.03.2024</span>
                </div>
              </div>
              <p className={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
