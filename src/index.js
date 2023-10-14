import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Register from './containers/Register';

// import { startVconsole } from './utils';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
);

// startVconsole();
