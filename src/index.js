import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from '@containers/Login';
import './index.css';
// import Register from './containers/Register';

// import { startVconsole } from './utils';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Login />
    {/* <Register /> */}
  </React.StrictMode>,
);

// startVconsole();
