/// <reference types="@emotion/react/types/css-prop" />

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

document.documentElement.style.scrollBehavior = 'smooth';

const q = window.matchMedia('(prefers-color-scheme: dark)');
const sync = (isDark: boolean) => document.body.classList[isDark ? 'add' : 'remove']('dark');

sync(q.matches);
q.addListener(e => sync(e.matches));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
