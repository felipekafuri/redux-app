import { AxiosResponse } from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { IState } from '../..'
import { api } from '../../../services/api'
import { add_product_to_cart_failure, add_product_to_cart_request, add_product_to_cart_success } from './actions'
import { ActionTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof add_product_to_cart_request>

interface IStockResponse {
  id: number;
  quantity: number
}

function* checkProductStock({ payload }:CheckProductStockRequest){
  const { product } = payload

  const currentQuantity: number = yield select((state:IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity || 0
  })

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`)

  if(availableStockResponse.data.quantity > currentQuantity){
    yield put(add_product_to_cart_success(product))
  }else{
    yield put(add_product_to_cart_failure(product.id))
  }

  console.log(currentQuantity)
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock)
])