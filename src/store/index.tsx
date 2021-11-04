import { createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import { combinedReducers } from './modules/rootReducer';


export interface IState {
  cart: ICartState;
}

const store = createStore(combinedReducers);


export { store }