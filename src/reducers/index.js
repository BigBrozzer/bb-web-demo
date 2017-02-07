import {combineReducers} from 'redux';

import posts from './posts';
import modals from './modals';

const rootReducer = combineReducers({posts, modals});

export default rootReducer;
