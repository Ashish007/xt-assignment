import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

module.exports = function render(initialState){
const store = configureStore(initialState);

}
