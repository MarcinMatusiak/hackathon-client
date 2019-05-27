/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App.jsx';
import rootReducer from './store';
import '@babel/polyfill';
import createMomentsSDK from "@livechat/moments-sdk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const init = () => {
  createMomentsSDK({
    title: "My App"
  }).then(momentsSDK => {
    momentsSDK.sendMessage({
      text: "Chosen date: 19.12.2009"
    });

  });

}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
