"use client";

import React from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading . . . </div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.button} onClick={() => signIn("google")}>
          {" "}
          Sign in with Google
        </div>
        <div className={styles.button}> Sign in with Github</div>
        <div className={styles.button}> Sign in with Apple</div>
      </div>
    </div>
  );
};

export default Login;
