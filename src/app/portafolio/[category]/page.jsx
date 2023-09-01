import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { items } from "./data";

// ssr
const getData = (cat) => {

  //obtengo los datos local
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};




// component
function Category({ params }) {

  const data = getData(params.category);

  return (
    <div className={styles.container}>
      {/* titulo de categoria */}
      <h1 className={styles.catTitle}>{params.category}</h1>

      {/* item */}
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          {/* contenido */}
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          {/* imagen */}
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              alt=""
              src={item.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
