import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for you digital products</h1>
        <p className={styles.desc}>
          Turning your idea into Reality. We bring together the teams frm the
          global teach indsutry
        </p>
        <button className={styles.button}> See Our industry</button>
      </div>

      <div className={styles.item}>
        {" "}
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
}
