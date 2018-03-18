import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { bbConnector, bbMiddleware, bbMLabProvider } from 'big-brother';

import rootReducer from './reducers/index';

const defaultState = {
    posts: {
        posts: [],
        fetching: false,
        error: null
    }
};

const middleware = applyMiddleware(bbMiddleware, thunk, logger(), promise());
const store = createStore(rootReducer, defaultState, middleware);

const apiProvider = bbMLabProvider({
    dbName: 'my-package',
    collName: 'journey',
    apiKey: 'Orf_sZpA2Pp2O5JdEoVUOZqq5dcRpeO5',
});
bbConnector(store, rootReducer, apiProvider);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;