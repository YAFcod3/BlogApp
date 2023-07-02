import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import {notFound} from 'next/navigation'


  //CSR
  async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
      cache:'no-store',
      // next:{revalidate:10}
    });
  
    if (!res.ok) {
      return notFound()
    }
  
    return res.json();
  }

  //metadata
  export async function generateMetadata({params}){

    const post = await getData(params.id)

    return{
      title:post.title,
      description:post.desc


    }
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
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>


        {/* imagen */}
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>




      {/* content */}
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
