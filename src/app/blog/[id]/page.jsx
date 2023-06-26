import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import {notFound} from 'next/navigation'


  //CSR
  async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      cache:'no-store',
      // next:{revalidate:10}
    });
  
    if (!res.ok) {
      return notFound()
    }
  
    return res.json();
  }

  


  //component

async function BlogPost({ params }) {

  const data= await getData(params.id)




  return (
    <div className={styles.container}>
      {/* top>info,image */}
      <div className={styles.top}>

        {/* info */}
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src="https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Jhon Doe</span>
          </div>
        </div>


        {/* imagen */}
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16796400/pexels-photo-16796400/free-photo-of-woman-posing-in-red-clothes-near-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>




      {/* content */}
      <div className={styles.content}>
        <p className={styles.text}>Contenido</p>
      </div>
    </div>
  );
}

export default BlogPost;
