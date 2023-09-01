import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div>2023 BlogApp . All Rights reserved. </div>
      <div>
        <div className={styles.social}>
          <Image src="/1.png" className={styles.icon} width={15} height={15} alt="blogapp facebook" />
          <Image src="/2.png" className={styles.icon} width={15} height={15} alt="blogapp instagram" />
          <Image src="/3.png" className={styles.icon} width={15} height={15} alt="blogapp twitter" />
          <Image src="/4.png" className={styles.icon} width={15} height={15} alt="blogapp youtube" />


        </div>
      </div>
    </div>
  );
}

export default Footer;
