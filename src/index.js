import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
