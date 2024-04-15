import CardList from "@/components/cardList/CardList";
import React from "react";
import styles from "./categoryPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <div className={styles.category}>{cat}</div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
