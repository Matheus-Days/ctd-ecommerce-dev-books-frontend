import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { api } from '../../services'
import { ProductsContainer, ProductListItem } from '../../components'
import { mockProducts } from '../../mocks'
import './style.scss'


export function ProductsCategory() {
    const { categoryId } = useParams()

    const [products, setProducts] = useState(mockProducts)
    
    console.log({ products })
    const getCategories = useCallback(async () => {
      // await api.get(`/products`).then(response => {
        // const products = response.data 
        // const filteredProducts = products.filter(product => product.category.id === +categoryId)
        // setProducts(filteredProducts ?? [])
      // })

      const cameFromApiProducts = mockProducts
      const filteredProducts = cameFromApiProducts.filter(product => product.category.id === +categoryId)
      setProducts(filteredProducts)
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