import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { add_product_to_cart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface Props {
  product: IProduct;
}

export function CatalogItem({product}: Props) {
  const dispatch = useDispatch()


  const handleAddProductToCart = useCallback(() => {
    dispatch(add_product_to_cart(product))
  }, [dispatch, product])


  return (
    <article key={product.id}>
      <strong>{product.title}</strong>{" - "}
      <span>{product.price}</span>{" "}

      <button type="button" onClick={handleAddProductToCart}>Comprar</button>
    </article>
  )
}