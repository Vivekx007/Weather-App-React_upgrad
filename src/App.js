import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
function App(props) {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Searchbar />
    </React.Fragment>
  );
}

export default App;
