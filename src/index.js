import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const elementsNoHTML = document.getElementById("root");
const sakne = ReactDOM.createRoot(elementsNoHTML);
sakne.render(<App/>)
