import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/mdnica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diana Nica
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mdnica/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
