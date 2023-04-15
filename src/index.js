import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './ThemeContext';
import { Provider } from 'react-redux';
import store from './Store/store';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  
);

