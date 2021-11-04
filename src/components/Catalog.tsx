import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { api } from '../services/api'
import { IProduct } from '../store/modules/cart/types'


export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([])
 

  useEffect(() =>{
    api.get('/products').then(response => {
      setCatalog(response.data)
    })
  },[])
  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => {
        return (
          <article key={product.id}>
            <strong>{product.title}</strong>{" - "}
            <span>{product.price}</span>{" "}

            <button type="button">Comprar</button>
          </article>
        )
      })}
    </main>
  )
}