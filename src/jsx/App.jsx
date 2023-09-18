import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

// https://www.npmjs.com/package/uuid
import { v4 as uuidv4 } from 'uuid';

// Load helpers
import easingFn from './helpers/EasingFn.js';
import formatNr from './helpers/FormatNr.js';
import roundNr from './helpers/RoundNr.js';

function App({
  gap,
  gap_explaner,
  per_person,
  percentage_min,
  percentage_rest,
  share_gdp,
  total_cost,
  url
}) {
  const appRef = useRef();

  const visualiseDots = () => {
    const vis_container = d3.select(appRef.current);
    setTimeout(() => {
      vis_container.selectAll('.dot_wrapper')
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
        .delay((d, i) => 100 * i)
        .style('height', '35px')
        .style('width', '35px')
        .ease(d3.easeBounceOut)
        .style('opacity', 1);
    }, 1300);
  };
  return (
    <div className="app" ref={appRef}>
      <div className="container">
        <div className="background_ring" />
        <div className="content">
          <h2>How much will it cost?</h2>
          <div className="intro">Figures include data for 48 developing economies</div>
          <IsVisible once>
            {(isVisible) => (
              <>
                <div className={`number_container left total_cost ${(isVisible) ? 'visible' : ''}`}>
                  <div className="number total_cost">
                    <span className="value">
                      $
                      {roundNr(total_cost / 1000, 1)}
                    </span>
                    <span className="unit">
                      trillion
                      <br />
                      annually
                    </span>
                  </div>
                  <div className="extra">
                    This translates to
                    {' '}
                    $
                    {formatNr(roundNr(per_person, 0))}
                    {' '}
                    per person
                  </div>
                </div>
                <div className={`number_container right share_gdp ${(isVisible) ? 'visible' : ''}`}>
                  <h3 className="share_gdp">Financial burden</h3>
                  <div className="dots_container">
                    <div className="dots">
                      {
                        Array(parseInt(10, 10)).fill().map((el, i) => <div key={uuidv4()} className="dot"><span className={`dot_wrapper ${(i < (percentage_min + 1)) ? 'share' : ''}`}><span className={(isVisible) ? 'visible' : ''} style={{ width: (i === percentage_min) ? `${percentage_rest}%` : '100%' }} /></span></div>)

                      }
                      {
                        isVisible && visualiseDots()
                      }
                    </div>
                    <div className="number share_gdp">
                      <span className="value"><CountUp easingFn={easingFn} end={share_gdp} decimals={0} duration={2.5} delay={1.5} separator="," suffix="%" useEasing /></span>
                      <span className="unit">
                        of their
                        <br />
                        collective GDP
                      </span>
                    </div>
                    <div className="extra" />
                  </div>
                </div>
                <div className={`number_container left gap ${(isVisible) ? 'visible' : ''}`}>
                  <h3 className="gap">Spending gap</h3>
                  <div className="number gap">
                    <span className="value">
                      $
                      {roundNr(gap, 0)}
                    </span>
                    <span className="unit">
                      billion
                      <br />
                      annually
                    </span>
                  </div>
                  <div className="extra">{gap_explaner}</div>
                </div>
                <div className={`show_more_container ${(isVisible) ? 'visible' : ''}`}>
                  <div className="show_more_wrapper">
                    <a type="button" href={url}>
                      Learn
                      <br />
                      more
                    </a>
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

App.propTypes = {
  gap: PropTypes.number.isRequired,
  gap_explaner: PropTypes.string.isRequired,
  per_person: PropTypes.number.isRequired,
  percentage_min: PropTypes.number.isRequired,
  percentage_rest: PropTypes.number.isRequired,
  share_gdp: PropTypes.number.isRequired,
  total_cost: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
};

App.defaultProps = {
};

export default App;
