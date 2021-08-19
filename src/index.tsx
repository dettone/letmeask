import React from 'react';
import ReactDOM from 'react-dom'; // ----- Is a WEB Application
import App from './App';
import './services/firebase'
import './styles/global.scss'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Put inside this
); 

