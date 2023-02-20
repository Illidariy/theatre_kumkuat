import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { YMaps } from '@pbe/react-yandex-maps';
import App from './App/App';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <YMaps
        query={{
          apikey: 'd9185d65-8bbc-497d-815d-687bd0fc35b9',
        }}
      >
        <App />
      </YMaps>
    </BrowserRouter>
  </Provider>,
);
