"use client";

import Link from "next/link";
import React from "react";
import styles from './navbar.module.css'
import { signOut, useSession } from "next-auth/react";




function Navbar() {


  const session=useSession()

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portafolio",
      url: "/portafolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}> BlogApp</Link>
      <div className={styles.links}>
        {links.map((link) => (
          
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
        
        ))}

        {session.status === 'authenticated' &&
        
        <button className={styles.logout} onClick={signOut}>Logout</button>
        }
      </div>
    </div>
  );
}

export default Navbar;
