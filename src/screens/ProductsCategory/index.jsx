import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductsContainer, ProductListItem } from '../../components'
import { useApi } from '../../hooks/useApi'
import './style.scss'


export function ProductsCategory() {
    const { categoryId } = useParams()

    const [products, setProducts] = useState([])
    
    const getCategories = useCallback(async () => {
      await useApi.get('/products')
      .then(response => {
        const filteredProducts = response.data.filter(product => product.category.id === +categoryId)
        setProducts(filteredProducts ?? [])
      })
      .catch(() => null)

    }, [categoryId])
  
    useEffect(() => {
      getCategories()
    }, [getCategories])


    return (
      <div className="products-category-container">
        <ProductsContainer>
          <div className="products-category-container__item-list">
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