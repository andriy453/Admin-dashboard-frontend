import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import App from './App.jsx'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Admin-dashboard">
    <Provider store={store}>
    <PersistGate  persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
