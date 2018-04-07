import React, { Component } from "react";
import Polygon from "./Polygon";

const getTransform = () => {
  // console.log("getTransform running");
  let x = Math.random() * 0;
  let y = Math.random() * 0;

  return "translate(" + x + " " + y + ")";
};

class SVGArt extends Component {
  render() {
    return (
      <div>
        <svg width="100vw" height="100vh" viewBox="0 0 100 96" version="1.1">
          <title>Star</title>
          <desc>Created with Sketch.</desc>
          <defs />
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="shapes"
              // transform="translate(-60.000000, -49.000000)"
              transform={getTransform()}
              fill="#D8D8D8"
              stroke="#979797"
            >
              <Polygon />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default SVGArt;
