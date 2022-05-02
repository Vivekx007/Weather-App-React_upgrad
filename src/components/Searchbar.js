import React, { useEffect, useState } from "react";
import { getWeatherData } from "./WeatherApi";
import styles from "./Searchbar.module.css";

export default function Searchbar(props) {
  // const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  // const [loading, setLoading] = useState(false);

  // const getData = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getWeatherData(city);
  //     setWeatherData(data);
  //     // console.log(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error.message);
  //     setLoading(false);
  //   }
  // };

  // const override

  // useEffect(() => {
  //   getData();
  // }, []);
  const onCitySubmit = () => {
    // console.log(city);
    props.onSubmit(city);
  };
  return (
    <React.Fragment>
      <div className={styles.searchbar_container}>
        <input
          className={styles.searchbar_input}
          type="text"
          value={city}
          // onChange={(event) => setCity(event.target.value)}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Enter City Name..."
        />
        <button className={styles.searchbar_searchBtn} onClick={onCitySubmit}>
          Search
        </button>
        {{
          /* loading */
        } ? (
          <div className={styles.loader_container}>
            <h4>Searching City name...</h4>
          </div>
        ) : (
          " "
        )}
      </div>
    </React.Fragment>
  );
}
