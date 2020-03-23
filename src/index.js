import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css'
import Calculator from './main.js';


ReactDOM.render(
  <React.StrictMode>
    <h1 className='resultado'>CALCULADORA</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);



