import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import answersReducer from './answersReducer';
import cityReducer from './cityReducer';

const rootReducer = combineReducers({
  answersReducer,
  cityReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
