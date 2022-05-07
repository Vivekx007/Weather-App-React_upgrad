import React, { useState } from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  const [city, setCity] = useState("");

  const onCitySubmit = () => {
    props.onSubmit(city);
  };
  return (
    <React.Fragment>
      <div className={styles.searchbar_container}>
        <input
          className={styles.searchbar_input}
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter City Name..."
        />
        <button className={styles.searchbar_searchBtn} onClick={onCitySubmit}>
          Search
        </button>
      </div>
    </React.Fragment>
  );
}
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };
