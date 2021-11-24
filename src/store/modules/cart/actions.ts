import { IProduct } from "./types";

export function add_product_to_cart_request(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product
    }
  }
}

export function add_product_to_cart_success(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product
    }
  }
}

export function add_product_to_cart_failure(productId: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId
    }
  }
}

export function delete_product_from_cart(product: IProduct) {
  return {
    type: 'DELETE_PRODUCT_FROM_CART',
    payload: {
      product
    }
  }
}