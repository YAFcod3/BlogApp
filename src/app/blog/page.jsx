import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
//SSR
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts"
  // ,{
    // cache:'no-store',
    // next:{revalidate:10} }
  );

  if (!res.ok) {
    // throw new Error("Failed to the fetch data");
    return notFound()  }

  return res.json();
}







//component

async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {/* blog */}

      {data.map((item) => (
        
          <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
            {/* image */}
            <div className={styles.imageContainer}>
              <Image
                src={item.img}
              
                alt=""
                width={400}
                height={250}
                className={styles.image}
              />
            </div>
            {/* content */}
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.body}</p>
            </div>
          </Link>
       
      ))}
    </div>
  );
}

export default Blog;
