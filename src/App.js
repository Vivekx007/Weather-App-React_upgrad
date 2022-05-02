import React from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
function App() {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const apiKey = "007095548204eb9975bb507a5c3f2cdb";
  const onCityChange = (city) => {
    console.log(city);
    axios.get(baseUrl + `q=${city}&appid=${apiKey}`);
  };
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Searchbar onSubmit={onCityChange} />
    </React.Fragment>
  );
}

export default App;
