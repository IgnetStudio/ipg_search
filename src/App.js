'use strict';

// components

import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';

// styles

import './App.scss';

// code

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
  <div class="container-fluid header">
    <div class="container">
      ${Header()}
    </div>
  </div>
  <div class="container-fluid search">
    <div class="container">
      ${await Search()}
    </div>
  </div>
  <div class="container-fluid table">
    <div class="container">
      ${await Table()}
    </div>
  </div>
  `;

  // Return a new node from template
  return template.content.cloneNode(true);
}

export default App;
