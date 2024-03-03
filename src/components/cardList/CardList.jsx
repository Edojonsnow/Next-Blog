import React from "react";
import styles from "./cardList.module.css";
import Image from "next/image";
import Link from "next/link";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Recent Posts</h1>
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
};

export default CardList;
