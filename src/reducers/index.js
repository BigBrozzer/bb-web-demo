import {combineReducers} from 'redux';

import posts from './posts';
import modals from './modals';

const appReducer = combineReducers({posts, modals});

const rootReducer = (state, action) => {
    if (action.type === 'JOURNEY_REPRODUCING') {
        return action.initialState;
    }

    return appReducer(state, action)
};

export default rootReducer;
