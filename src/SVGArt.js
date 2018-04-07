import React, { Component } from 'react';
import Polygon from './Polygon';

const getTransform = () => {
  // console.log("getTransform running");
  let x = Math.random() * 10;
  let y = Math.random() * 10;

  return 'translate(' + x + ' ' + y + ')';
};

const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

class SVGArt extends Component {
  render() {
    return (
      <div>
        <svg width="77px" height="77px" viewBox="0 0 77 77" version="1.1">
          <title>Rectangle</title>

          <defs>
            <rect id="path-1" x="0" y="0" width="77" height="77" />
          </defs>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="cornflowerblue"
            fillRule="evenodd"
          >
            <g id="Rectangle">
              <use fill="#3F5965" fillRule="evenodd" />
              <rect
                stroke="#979797"
                strokeWidth="1"
                x="0.5"
                y="0.5"
                width={getRandomNum(0, 100)}
                height={getRandomNum(0, 100)}
                transform={getTransform()}
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default SVGArt;
