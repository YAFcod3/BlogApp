import Link from "next/link";
import React from "react";
import styles from './page.module.css'
import Image from "next/image";



function Blog() {
  return (
    <div className={styles.mainContainer}>
      {/* blog */}
    <Link href="/blog/testId" className={styles.container}>
      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          // src={item.img}
          src='https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      {/* content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>


     {/* blog */}
     <Link href="/blog/testId" className={styles.container}>
      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          // src={item.img}
          src='https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      {/* content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>


     {/* blog */}
     <Link href="/blog/testId" className={styles.container}>
      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          // src={item.img}
          src='https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      {/* content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>


     {/* blog */}
     <Link href="/blog/testId" className={styles.container}>
      {/* image */}
      <div className={styles.imageContainer}>
        <Image
          // src={item.img}
          src='https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      {/* content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Desc</p>
      </div>
    </Link>
     </div>
  );
}

export default Blog;
