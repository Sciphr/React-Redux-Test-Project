import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//Provide redux toolkit store to the entire app, import Provider, import the store from the index.js file in your store folder, and wrap the 'App' component in the 'Provider'