import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import MainRoutePage from './mainroute';

ReactDOM.render(
  <BrowserRouter>
    <MainRoutePage/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
