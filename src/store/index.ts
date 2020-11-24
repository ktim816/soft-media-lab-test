import {createStore} from 'redux';
import {rootReducer} from './reducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
export * from './selectors';
export * from './reducer';
export default createStore(rootReducer, devToolsEnhancer({}));
