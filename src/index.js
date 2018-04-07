import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

function Point(x, y) {
  this.x = x;
  this.y = y;
}

const getRandomPoint = () => {
  return new Point(
    Math.random() * (window.innerWidth * 0.9),
    Math.random() * (window.innerHeight * 0.9)
  );
};

let randomPoint = getRandomPoint();

const rootEl = document.getElementById("root");

function step(timestamp) {
  ReactDOM.render(<App />, rootEl);

  // console.log("oh snaps");

  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

registerServiceWorker();
