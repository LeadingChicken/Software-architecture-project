import React from "react";
import MemoryGame from "../../components/MemoryGame";
import styles from "@/styles/MemoryGame.module.css";

const MemoryPage = () => (
  <div className={styles.container}>
    <div className={styles.background}></div>
    <div
      className={`"d-flex justify-content-center align-items-center h-100 w-100" ${styles.content}`}
    >
      <MemoryGame />
    </div>
  </div>
);

export default MemoryPage;
