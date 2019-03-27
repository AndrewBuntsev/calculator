import * as Redux from 'redux';

import rootReducer from './reducers/rootReducer';

const defaultState = {
    expression: [0]
};
const store = Redux.createStore(rootReducer, Redux.compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;