import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux';
import postsReducer from './posts';
import commentsReducer from './comments'

const rootReducer = combineReducers({
  routing: routerReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default rootReducer;