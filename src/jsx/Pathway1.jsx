import React, { useEffect } from 'react';
import '../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

// Load
import easingFn from './helpers/EasingFn.js';

function App() {
  useEffect(() => {
    const vis_container = d3.select('#app-root-2023-sdg_costing_pathway1 .dots');
    vis_container.selectAll('span')
      .style('height', 0)
      .style('width', 0)
      .style('opacity', 0)
      .transition()
      .duration(500)
      .delay((d, i) => 5 * i)
      .style('height', '2px')
      .style('width', '2px')
      .ease(d3.easeBounceOut)
      .transition()
      .duration(200)
      .delay((d, i) => 5 * i)
      .style('height', '10px')
      .style('width', '10px')
      .ease(d3.easeBounceOut)
      .style('opacity', 1);
  });

  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <h2>Climate change, biodiversity loss and pollution</h2>
          <IsVisible once>
            {(isVisible) => (
              <>
                <div className="number_container dispaly">
                  <h3>Annual requirement</h3>
                  <div className={`number number_1 ${(isVisible) ? 'visible' : ''}`}>$5.8 trillion</div>
                  <div className={`round_up ${(isVisible) ? 'visible' : ''}`}><CountUp easingFn={easingFn} end={18.5} decimals={1} duration={4} delay={3} separator="," suffix="% of GDP" useEasing /></div>
                </div>
                <div className="number_container">
                  <h3>Spending gap</h3>
                  <div className={`number number_2 ${(isVisible) ? 'visible' : ''}`}>$352.3 billion</div>
                </div>
                <div className="legend_container">
                  <div className="legend_item">
                    <span className="legend_icon current" />
                    <span className="legend_text">Current spending</span>
                  </div>
                  <div className="legend_item">
                    <span className="legend_icon target" />
                    <span className="legend_text">Spending gap</span>
                  </div>
                  <div className="legend_item">
                    <span className="legend_icon" />
                    <span className="legend_text">Total GDP</span>
                  </div>
                </div>
                <div className="dots">
                  {
                    Array(parseInt(5753.7 / 100 / 0.185, 10)).fill().map((el, i) => <div className="dot"><span className={`${i < Math.floor((5753.7 - 352.3) / 100) ? 'current' : i < 5753.7 / 100 ? 'target' : ''}`}>$</span></div>)
                  }
                </div>
                <div className="note_container">Note: Each dot represents 100 billion dollars</div>
              </>
            )}
          </IsVisible>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
