"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./auth.module.css";
import { signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { status } = useSession();
  const [open, setIsOpen] = useState(false);
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            {" "}
            Write
          </Link>
          <span onClick={signOut}>Logout</span>
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
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write"> Write</Link>
              <span onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Auth;
