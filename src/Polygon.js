import React from "react";

const Polygon = props => {
  let startingPoints =
    "110 127.75 79.4351669 143.973392 85.2725306 109.611696 60.5450612 " +
    (85.2766078 + Math.random() * 10) +
    "  94.7175834 80.2633039 110 49 125.282417 80.2633039 159.454939 85.2766078 134.727469 109.611696 140.564833 143.973392";

  return (
    <polygon id="Star" points={startingPoints} transform={props.transform} />
  );
};

export default Polygon;
