"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./auth.module.css";

const Auth = () => {
  const status = "authenticated";
  const [open, setIsOpen] = useState(false);
  return (
    <>
      {status === "authenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            {" "}
            Write
          </Link>
          <span>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setIsOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.overlay}>
          <Link href="/"> Homepage</Link>
          <Link href="/"> Contact</Link>
          <Link href="/"> About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write"> Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Auth;
