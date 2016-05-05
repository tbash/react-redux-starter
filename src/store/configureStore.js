import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, api),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
