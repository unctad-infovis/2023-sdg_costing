import React, { } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';
import easingFn from './helpers/EasingFn.js';

function App() {
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
