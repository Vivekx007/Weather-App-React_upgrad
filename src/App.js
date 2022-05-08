import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import WeatherBox from "./components/WeatherBox";
function App() {
  const [cityDetails, setCityDetails] = useState({
    cityNameFound: "",
    cityNameError: false,
    loadingIndicator: false,
    cityName: "",
    cityTemperature: "",
    cityWeatherDescription: "",
    cityWind: "",
    cityHumidity: "",
    cityMaxTmp: "",
    cityMinTmp: "",
    cityPressure: "",
    citySunrise: "",
    citySunset: "",
    cityCountry: "",
  });

  const onCityChange = (city) => {
    console.log(city);
    setCityDetails((prevState) => {
      return {
        ...prevState,
        cityNameFound: false,
        loadingIndicator: true,
        cityNameError: false,
      };
    });
    const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "007095548204eb9975bb507a5c3f2cdb";
    // axios
    fetch(baseURL + `q=${city}&appid=${apiKey}&units=metric`)
      .then((response) => {
        // console.log(response.data.cod);
        return response.json();
      })
      .then(function (response) {
        // console.log(response.data.cod);

        if (response.cod === "404") {
          setCityDetails((prevState) => {
            return {
              ...prevState,
              cityNameFound: false,
              cityNameError: true,
              loadingIndicator: false,
            };
          });
        } else if (response.cod === 200) {
          console.log("Response from openweathermap api ", response);
          let sunrise = new Date(
            response.sys.sunrise * 1000
          ).toLocaleTimeString();
          let sunset = new Date(
            response.sys.sunset * 1000
          ).toLocaleTimeString();

          setCityDetails((prevState) => {
            return {
              ...prevState,
              cityNameFound: true,
              cityNameError: false,
              cityName: response.name,
              cityTemperature: response.main.temp,
              cityWeatherDescription: response.weather[0].main,
              cityWind: response.wind.speed,
              cityHumidity: response.main.humidity,
              cityMaxTmp: response.main.temp_max,
              cityMinTmp: response.main.temp_min,
              cityPressure: response.main.pressure,
              weatherIcon: response.weather[0].icon,
              loadingIndicator: false,
              cityCountry: response.sys.country,
              citySunrise: sunrise,
              citySunset: sunset,
            };
          });
        }
      });
  };

  let showErrorMessage =
    cityDetails.cityNameError === true ? (
      <div
        style={{
          background: "#FFFFFF",
          color: "grey",
          textAlign: "center",
          boxShadow: "0px 4px 32px rgba(143, 143, 143, 0.4)",
          borderRadius: "4px",
          padding: "10px",
          marginTop: "10px",
          paddingBottom: "10px",
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        <h4>City Name not found</h4>
      </div>
    ) : (
      ""
    );
  let showTemperatureDetails =
    cityDetails.cityNameFound === true ? (
      <WeatherBox
        cityName={cityDetails.cityName}
        cityTemperature={cityDetails.cityTemperature}
        cityWeatherDescription={cityDetails.cityWeatherDescription}
        cityWind={cityDetails.cityWind}
        cityHumidity={cityDetails.cityHumidity}
        cityMaxTmp={cityDetails.cityMaxTmp}
        cityMinTmp={cityDetails.cityMinTmp}
        cityPressure={cityDetails.cityPressure}
        weatherIcon={cityDetails.weatherIcon}
        citySunset={cityDetails.citySunset}
        citySunrise={cityDetails.citySunrise}
        cityCountry={cityDetails.cityCountry}
      ></WeatherBox>
    ) : cityDetails.loadingIndicator === true ? (
      <div
        style={{
          background: "#FFFFFF",
          color: "grey",
          textAlign: "justify",
          boxShadow: "0px 4px 32px rgba(143, 143, 143, 0.4)",
          borderRadius: "4px",
          padding: "10px",
          marginTop: "10px",
          paddingBottom: "10px",
          marginLeft: "15%",
          marginRight: "15%",
        }}
      >
        <h4>Searching City name...</h4>
      </div>
    ) : (
      " "
    );
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <br />
        <Searchbar onSubmit={onCityChange} />
        {showErrorMessage}
        {showTemperatureDetails}
      </div>
    </React.Fragment>
  );
}

export default App;
