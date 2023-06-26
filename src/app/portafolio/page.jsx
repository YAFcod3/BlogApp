import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

function Portafolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a galley</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portafolio/illustrations"><span className={styles.title}>Illustrations</span></Link>
        <Link className={styles.item} href="/portafolio/websites"><span className={styles.title}>Websites</span></Link>
        <Link className={styles.item} href="/portafolio/applications"><span className={styles.title}>Applications</span></Link>
      </div>
    </div>
  )
}

export default Portafolio