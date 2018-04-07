import React, { Component } from 'react';
import './App.css';
import SVGArt from './SVGArt';
import Snap from 'snapsvg-cjs';

class App extends Component {
  componentDidMount() {
    this.svgRender();
  }

  svgRender = () => {
    let s = Snap(this.svgEl);

    const bigCircle = s.circle(150, 150, 100);
    bigCircle.attr({
      fill: '#bada55',
      stroke: 'cornflowerblue',
      strokeWidth: 5
    });

    const smallCircle = s.circle(150, 150, 30);
    // smallCircle.attr({
    //   fill: 'lightgreen'
    // });

    const discs = s.group(smallCircle, s.circle(300, 150, 30));
    discs.attr({
      fill: 'blue'
    });

    bigCircle.attr({
      // mask: discs
    });

    smallCircle.animate({ r: 50 }, 3000);

    discs.select('circle:nth-child(2)').animate({ r: 70 }, 4000);

    // Now lets create pattern
    var p = s.path('M10-5-10,15M15,0,0,15M0-5-20,15').attr({
      fill: 'blue',
      stroke: 'orange',
      strokeWidth: 5
    });
    // To create pattern,
    // just specify dimensions in pattern method:
    p = p.pattern(0, 0, 10, 10);
    // Then use it as a fill on big circle
    bigCircle.attr({
      fill: p
    });
  };

  render() {
    return (
      <div className="wrapper">
        <svg width="800" height="600" ref={el => (this.svgEl = el)}>
          {/*<SVGArt />*/}
        </svg>
      </div>
    );
  }
}

export default App;
