// components

import Header from './components/Header';

// styles

import './App.scss';

// code

async function App() {
  const template = document.createElement('template');
  template.innerHTML = `
  <div class="container-fluid">
    <div class="container">
      ${await Header()}
    </div>
  </div>
  `;

  // Return a new node from template
  return template.content.cloneNode(true);
}

export default App;
