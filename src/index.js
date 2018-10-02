import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { Provider } from 'react-redux';
import { store } from './store';
//import { createStore } from 'redux';
//import rootReducer from './reducers';

//const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <App />,
  document.getElementById("root")
);

render();
store.subscribe(render);

registerServiceWorker();
