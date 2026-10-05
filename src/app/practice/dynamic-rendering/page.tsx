import HomeClient from "../../components/HomeClient";
import styles from "../../page.module.css";

export const metadata = {
  title: "飯処 太心 TAISHIN",
  description: "お腹も心も満たすうまいメシ、食べにおいで。",
};

export default function Page() {
  return (
    <div className={styles.page}>
      <HomeClient />
    </div>
  );
}
