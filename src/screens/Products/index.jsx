import React, { useCallback, useEffect, useState } from 'react'

import { ProductsContainer, ProductListItem } from '../../components'
import { useApi } from '../../hooks/useApi'
import './style.scss'

export function Products() {
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    await useApi.get('/products')
      .then(response => setProducts(response.data))
      .catch(() => null)
  }, [])

  
  useEffect(() => {
    getProducts()
  }, [getProducts])


  return (
    <div className="products-category-container">
      <ProductsContainer categoryType="">
        <div className="products-container__item-list">
          {products.map((product) => (
            <ProductListItem 
              key={product.id}
              imageUrl={product.image} 
              name={product.title} 
              price={product.price} 
              id={product.id} 
            />
          ))}
        </div>
      </ProductsContainer>
    </div>
  )
  }
