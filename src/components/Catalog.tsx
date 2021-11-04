import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { api } from '../services/api'
import { add_product_to_cart } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([])
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(add_product_to_cart(product))
  }, [dispatch])


  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data)
    })
  }, [])


  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => {
        return (
          <article key={product.id}>
            <strong>{product.title}</strong>{" - "}
            <span>{product.price}</span>{" "}

            <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
          </article>
        )
      })}
    </main>
  )
}