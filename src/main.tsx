import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
// TODO: The components don't look right without this, but this also changes the font of the app
// import 'primereact/resources/themes/lara-light-cyan/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
