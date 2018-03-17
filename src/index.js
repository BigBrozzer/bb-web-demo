import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BBUI } from 'big-brother';

import Blog from './containers/Blog';
import store from './store';

import './styles/app.styl';

ReactDOM.render(<Provider store={store}>
    <Blog />
</Provider>, document.getElementById('root'));

ReactDOM.render(<BBUI />, document.getElementById('bb'));
