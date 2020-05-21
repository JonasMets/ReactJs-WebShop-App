import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux
// redux provider
import { Provider } from 'react-redux';
// hämtar store data från /store/storeConfig
// här hämtas store funktionen med de reducers som valts i combinedReducers
// store skickas sedan med in i <Provider> så att alla komponenter 
// som omsluts kan komma åt data i store 
import { store } from './redux-store/storeConfig';

// för att kunna använda cookies
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
