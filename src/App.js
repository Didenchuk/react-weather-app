import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="New York"/>
    <footer>
      This project was coded by Tanya Didenchuk and is {" "}
    <a href="https://github.com/Didenchuk/react-weather-app" target="_blank">
    open-sourced on GitHub
    </a>
    </footer>
    </div>
    </div>
  );
}


