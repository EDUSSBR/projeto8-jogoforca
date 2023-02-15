import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalResetMeyer} from './Reset'
import { GlobalStyles } from './Global';
import Theme  from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme>
    <GlobalResetMeyer />
    <GlobalStyles />
    <App />
    </Theme>
  </React.StrictMode>
);