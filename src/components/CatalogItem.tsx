import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { add_product_to_cart_request } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface Props {
  product: IProduct;
}

export function CatalogItem({product}: Props) {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.outOfStockProductsIds.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(add_product_to_cart_request(product))
  }, [dispatch, product])

  return (
    <article key={product.id}>
      <strong>{product.title}</strong>{" - "}
      <span>{product.price}</span>{" "}

      <button 
        type="button" 
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{color: 'red'}}>Estoque esgotado</span>}
    </article>
  )
}