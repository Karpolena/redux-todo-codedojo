import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

import App from './App';
import todos from './todos';
import './../scss/main.scss';

const store = createStore(reducer, todos);


render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));




