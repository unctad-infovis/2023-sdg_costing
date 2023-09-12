import React, { } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

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
