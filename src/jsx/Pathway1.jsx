import React, { useEffect } from 'react';
import '../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';
import easingFn from './helpers/EasingFn.js';

function App() {
  useEffect(() => {
    const vis_container = d3.select('.dots');
    vis_container.selectAll('span')
      .style('height', 0)
      .style('width', 0)
      .style('opacity', 0)
      .transition()
      .duration(500)
      .delay((d, i) => 30 * i)
      .style('height', '50px')
      .style('width', '50px')
      .ease(d3.easeBounceOut)
      .transition()
      .duration(200)
      .delay((d, i) => 30 * i)
      .style('height', '30px')
      .style('width', '30px')
      .ease(d3.easeBounceOut)
      .style('opacity', 1);
  });

  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <h2>Climate change, biodiversity loss and pollution</h2>
          <h3>Annual requirement</h3>
          <IsVisible once>
            {(isVisible) => (
              <div className="number_container">
                <div className={`number number_1 ${(isVisible) ? 'visible' : ''}`}>$5.8 trillion</div>
                <div className={`number number_2 ${(isVisible) ? 'visible' : ''}`}>$5.8 trillion</div>
                <div className={`number number_3 ${(isVisible) ? 'visible' : ''}`}><CountUp easingFn={easingFn} end={300} duration={4} delay={6} separator="," useEasing /></div>
                <div className="dots">
                  <div className="dot"><span className="red" /></div>
                  <div className="dot"><span className="red" /></div>
                  <div className="dot"><span className="red" /></div>
                  <div className="dot"><span className="red" /></div>
                  <div className="dot"><span className="red" /></div>
                  <div className="dot"><span className="red" /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                  <div className="dot"><span /></div>
                </div>
              </div>
            )}
          </IsVisible>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
