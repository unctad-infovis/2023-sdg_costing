import React from 'react';

import { createRoot } from 'react-dom/client';

import Pathway1 from './jsx/Pathway1.jsx';

import Pathway2 from './jsx/Pathway2.jsx';

const containerPathway1 = document.getElementById('app-root-2023-sdg_costing_pathway1');
const rootPathway1 = createRoot(containerPathway1);
rootPathway1.render(<Pathway1 />);

const containerPathway2 = document.getElementById('app-root-2023-sdg_costing_pathway2');
const rootPathway2 = createRoot(containerPathway2);
rootPathway2.render(<Pathway2 />);
