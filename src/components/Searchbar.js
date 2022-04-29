import React from "react";
import styles from "./Searchbar.module.css";
export default function Searchbar() {
  return (
    <React.Fragment>
      <div className={styles.searchbar_container}>
        <input
          className={styles.searchbar_input}
          type="text"
          placeholder="Enter City Name..."
        />
        <button className={styles.searchbar_searchBtn}>Search</button>
      </div>
    </React.Fragment>
  );
}
