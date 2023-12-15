import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Register from '@containers/Register';
import Login from '@containers/Login';
import App from '@containers/App';
import Tweets from '@containers/Tweets';
import Comment from '@containers/Comment';
import { CxtProvider } from '@utils/context';

// import { startVconsole } from './utils';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="tweets" element={<Tweets />} />
            <Route path="comment/:id" element={<Comment />} />
            <Route path="tip" element={<Comment />} />
            <Route path="message" element={<Comment />} />
            <Route path="search" element={<Comment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
);

// startVconsole();
