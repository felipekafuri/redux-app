import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { delete_product_from_cart } from '../store/modules/cart/actions';
import { ICarItem } from '../store/modules/cart/types';

export function Cart() {
  const cart = useSelector<IState, ICarItem[]>(state => state.cart.items)
  const dispatch = useDispatch()

  const handleDeleteProductFromCart = useCallback((product) => {
    dispatch(delete_product_from_cart(product))
  }, [dispatch])

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {
          cart.map(item => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
              <td>
                <button type="button" onClick={() => handleDeleteProductFromCart(item.product)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}