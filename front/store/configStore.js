import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import userReducer from './userStore/userReducer';
import thunk from 'redux-thunk';
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer = combineReducers({
  user: userReducer,
});

const middlewares = [thunk];

const enhancers = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(rootReducer, enhancers);

export default store;
