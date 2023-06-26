import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
function Category({ params }) {
  return (
    <div className={styles.container}>
      {/* titulo de categoria */}
      <h1 className={styles.catTitle}>{params.category}</h1>

      {/* item */}
      <div className={styles.item}>
        {/* contenido */}
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        {/* imagen */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      {/* item */}
      <div className={styles.item}>
        {/* contenido */}
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        {/* imagen */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      {/* item */}
      <div className={styles.item}>
        {/* contenido */}
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        {/* imagen */}
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            alt=""
            src="https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
