import React from "react";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <React.Fragment>
      <div className={styles.weather_Container}>
        <span className={styles.weather_header}>Weather App</span>
      </div>
    </React.Fragment>
  );
}
