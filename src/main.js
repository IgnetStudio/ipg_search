import App from './App';

// code

const app = async () => {
  document.getElementById('App').appendChild(await App());
};

// Load application

app();
