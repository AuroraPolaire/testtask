import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyles } from './globalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </>
  // </React.StrictMode>
);
