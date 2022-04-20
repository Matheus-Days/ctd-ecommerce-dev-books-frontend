import React, { useCallback, useEffect, useState } from 'react'

import { ProductsContainer, ProductListItem } from '../../components'

import './style.scss'
import { mockProducts } from '../../mocks'

export function Products() {
  const [products, setProducts] = useState(mockProducts)

  const getProducts = useCallback(async () => {
    // await api.get(`/products).then(response => console.log(response.data.content))
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
