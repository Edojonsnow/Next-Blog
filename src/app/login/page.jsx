import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.button}> Sign in with Google</div>
        <div className={styles.button}> Sign in with Github</div>
        <div className={styles.button}> Sign in with Apple</div>
      </div>
    </div>
  );
};

export default Login;
