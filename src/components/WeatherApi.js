import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "007095548204eb9975bb507a5c3f2cdb";
export async function getWeatherData(cityname) {
  try {
    const { data } = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
    return data;
  } catch (error) {
    throw error;
  }
}

// import React,{ useState} from "react";

// export default function WeatherApi(props) {
//   const[weatherDetails, setWeatherDetails] useState({   cityNameFound: null,
//     cityNameError: false,
//     loadingIndicator: false,
//     cityName : null,
//     cityTemperature: null,
//     cityWeatherDescription: null,
//     cityWind: null,
//     cityHumidity: null,
//     cityMaxTmp: null,
//     cityMinTmp: null,
//     cityPressure: null,
//     citySunrise: null,
//     citySunset:  null,
//     cityCountry: null,});

//   return <div>WeatherApi</div>;
// }
