import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/Menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";
import Cardlist from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/Pagination";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <Cardlist page={page} />
        <Menu />
      </div>
    </div>
  );
}
