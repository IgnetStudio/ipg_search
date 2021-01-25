'use strict';

import App from './App';

// toggle font resizer & dark mode

const root = document.querySelector(':root');
const body = document.querySelector('body');
const toggleFont = document.querySelector('.toggle-font');
const toggleContrast = document.querySelector('.toggle-contrast');

toggleFont.addEventListener('click', () => {
  root.classList.toggle('wcag-size');
});

toggleContrast.addEventListener('click', () => {
  body.classList.toggle('wcag-mode');
});

// Load application

const app = async () => {
  document.getElementById('App').appendChild(await App());
};

app();
