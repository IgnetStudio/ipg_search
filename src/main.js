'use strict';

import App from './App';

// toggle dark mode

const body = document.querySelector('body');
const contrastToggle = document.querySelector('.contrast-toggle');

contrastToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
});

// Load application

const app = async () => {
  document.getElementById('App').appendChild(await App());
};

app();
