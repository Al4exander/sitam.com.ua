import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {SizeProvider} from "./lib/sizeContext";

ReactDOM.render(
  <React.StrictMode>
      <SizeProvider>
        <App />
      </SizeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
