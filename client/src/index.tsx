import React from 'react';
import Router from './router';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);