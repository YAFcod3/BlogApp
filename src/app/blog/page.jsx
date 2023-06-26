import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

//CSR
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
    // cache:'no-store',
    next:{revalidate:10}
  });

  if (!res.ok) {
    throw new Error("Failed to the fetch data");
  }

  return res.json();
}







//component

async function Blog() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {/* blog */}

      {data.map((item) => (
        
          <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
            {/* image */}
            <div className={styles.imageContainer}>
              <Image
                // src={item.img}
                src="https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
