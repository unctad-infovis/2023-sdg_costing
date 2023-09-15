import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';

// Social protection and decent jobs
const containerPathway1 = document.getElementById('app-root-2023-sdg_costing_pathway1');
if (containerPathway1) {
  const rootPathway1 = createRoot(containerPathway1);
  rootPathway1.render(
    <App
      gap={293.7}
      gap_explaner="The eight small island developing states in the study face the largest relative gap at $3.3 billion."
      per_person={1179}
      percentage_min={1}
      percentage_rest={74}
      share_gdp={17.4}
      total_cost={5386}
      url="/sdg-costing/social-protection"
    />
  );
}

// Education transformation
const containerPathway2 = document.getElementById('app-root-2023-sdg_costing_pathway2');
if (containerPathway2) {
  const rootPathway2 = createRoot(containerPathway2);
  rootPathway2.render(
    <App
      gap={274.5}
      gap_explaner="The six least developed countries face the largest relative gap at $8.1 billion."
      per_person={1300}
      percentage_min={1}
      percentage_rest={91}
      share_gdp={19.1}
      total_cost={5937}
      url="/sdg-costing/education-transformation"
    />
  );
}

// Food systems
const containerPathway3 = document.getElementById('app-root-2023-sdg_costing_pathway3');
if (containerPathway3) {
  const rootPathway3 = createRoot(containerPathway3);
  rootPathway3.render(
    <App
      gap={327.8}
      gap_explaner="The 29 upper-middle and high-income economies in the study face the largest relative annual gap at $309 billion."
      per_person={1342}
      percentage_min={1}
      percentage_rest={98}
      share_gdp={19.8}
      total_cost={6127.2}
      url="/sdg-costing/food-systems"
    />
  );
}

// Climate change, biodiversity loss, and pollution
const containerPathway4 = document.getElementById('app-root-2023-sdg_costing_pathway4');
if (containerPathway4) {
  const rootPathway4 = createRoot(containerPathway4);
  rootPathway4.render(
    <App
      gap={352.3}
      gap_explaner="The 29 upper-middle and high-income developing economies in the study face the largest relative gap at $327 billion."
      per_person={1251}
      percentage_min={1}
      percentage_rest={85}
      share_gdp={18.5}
      total_cost={5753.7}
      url="/sdg-costing/climate-change"
    />
  );
}

// Energy
const containerPathway5 = document.getElementById('app-root-2023-sdg_costing_pathway5');
if (containerPathway5) {
  const rootPathway5 = createRoot(containerPathway5);
  rootPathway5.render(
    <App
      gap={286.1}
      gap_explaner="The 29 upper-middle and high-income countries in the study face the largest relative gap at $281 billion."
      per_person={1271}
      percentage_min={1}
      percentage_rest={87}
      share_gdp={18.7}
      total_cost={5804.7}
      url="/sdg-costing/energy-transition"
    />
  );
}

// Inclusive digitalization
const containerPathway6 = document.getElementById('app-root-2023-sdg_costing_pathway6');
if (containerPathway6) {
  const rootPathway6 = createRoot(containerPathway6);
  rootPathway6.render(
    <App
      gap={468.6}
      gap_explaner="The 29 upper-middle and high-income developing economies in the study face the largest relative gap at $430 billion."
      per_person={1231}
      percentage_min={1}
      percentage_rest={81}
      share_gdp={18.1}
      total_cost={5620}
      url="/sdg-costing/digitalization"
    />
  );
}

// Gender equality
const containerPathway7 = document.getElementById('app-root-2023-sdg_costing_pathway7');
if (containerPathway7) {
  const rootPathway7 = createRoot(containerPathway7);
  rootPathway7.render(
    <App
      gap={360.4}
      gap_explaner="The eight small island developing states face the largest relative gap at $14.9 billion."
      per_person={1383}
      percentage_min={2}
      percentage_rest={5}
      share_gdp={20.5}
      total_cost={6364}
      url="/sdg-costing/gender-equality"
    />
  );
}
