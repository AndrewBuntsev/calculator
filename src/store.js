import * as Redux from 'redux';

import rootReducer from './reducers/rootReducer';
import * as ButtonTypes from './consts/buttonTypes';

//export const defaultState = [ButtonTypes.buttonMap.get(ButtonTypes.ZERO)];
export const defaultState = [ ButtonTypes.ZERO ];

const store = Redux.createStore(rootReducer, defaultState, Redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;