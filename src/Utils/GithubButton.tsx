import React from "react";
import styles from "../css/GithubButton.module.css";

export default function GithubButton() {
  return (
    <button className={styles.button}>
      <span className={styles.text}>Get Code</span>
      <span className={styles.container}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.75 17.25L1.5 12L6.75 6.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4 L12 20"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 6.75L22.5 12L17.25 17.25"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
