import { createStore } from 'redux';
import { combinedReducers } from './modules/rootReducer';


const store = createStore(combinedReducers);


export { store }