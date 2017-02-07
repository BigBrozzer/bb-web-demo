import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/index';

const defaultState = {
    posts: {
        posts: [],
        fetching: false,
        error: null
    }
};
const middleware = applyMiddleware(thunk, logger(), promise());
const store = createStore(rootReducer, defaultState, middleware);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;