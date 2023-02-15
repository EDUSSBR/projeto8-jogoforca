import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalResetMeyer} from './Reset'
import { GlobalStyles } from './Global';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalResetMeyer />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);