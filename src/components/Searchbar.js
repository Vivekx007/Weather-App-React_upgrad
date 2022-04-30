import React, { useEffect, useState } from "react";
import { getWeatherData } from "./WeatherApi";
import styles from "./Searchbar.module.css";

export default function Searchbar() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("patna");
  // const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className={styles.searchbar_container}>
        <input
          className={styles.searchbar_input}
          type="text"
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter City Name..."
        />
        <button
          className={styles.searchbar_searchBtn}
          onClick={() => {
            getData();
          }}
        >
          Search
        </button>
        {/* <Loading /> */}
      </div>
    </React.Fragment>
  );
}
