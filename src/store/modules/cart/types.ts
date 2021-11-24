export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICarItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICarItem[];
  outOfStockProductsIds: number[];
}
 


export enum ActionTypes {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
  deleteProductFromCart = 'DELETE_PRODUCT_FROM_CART',
}