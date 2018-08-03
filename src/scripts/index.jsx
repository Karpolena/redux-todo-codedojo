import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './App';
import todos from './todos';
import './../scss/main.scss';

const store = createStore(reducer, todos);
console.log(store.getState());

store.subscribe(() => console.log(store.getState()));








render(<App initialData={todos} title="React Todo"/>, document.getElementById('root'));




