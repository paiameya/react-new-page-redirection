import { createStore, combineReducers } from 'redux';
import pageListReducer from './pageListReducer';
const reducer = combineReducers({ pages: pageListReducer });
const initialState = {
    pages: [{ id: 1, data: { attributes: { html: '<h1>Hello World</h1>' } } }, 
    { id: 2, data: { attributes: { html: '<h1>Hello Earth</h1>' } } }, 
    { id: 3, data: { attributes: { html: '<h1>Hello Universe</h1>' } } }, 
    { id: 4, data: { attributes: { html: '<h1>Hello Multiverse</h1>' } } }]
};
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;