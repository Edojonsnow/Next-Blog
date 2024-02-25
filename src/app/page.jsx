import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";
import Cardlist from "@/components/cardList/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
