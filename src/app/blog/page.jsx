import CardList from "@/components/cardList/CardList";
import React from "react";
import styles from "./categoryPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>Personal</div>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
