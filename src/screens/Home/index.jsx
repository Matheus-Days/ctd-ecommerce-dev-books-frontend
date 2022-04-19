import { useCallback, useEffect, useState } from 'react'

import './style.scss';
import { Slider, ProductListItem, ItemsSlider } from '../../components'
import { CategoriesList } from './components'
import { mockProducts, mockSlider } from '../../mocks'
import { api } from '../../services'


export function Home() {
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    // await api.get('/products').then(response => {
    //     setProducts(response.data.content.slice(0, 8))
    // })

    setProducts(mockProducts.slice(0,8))
  }, [])
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="home-container">
      <Slider items={mockSlider} />
      <CategoriesList />
      <div className="home-container__most-selled-list">
        <h4 className="home-container__most-selled-list__title">Livros mais vendidos</h4>
        <div className="home-container__most-selled-list__slider-wrapper">
          <ItemsSlider>
            {products.map((product) => (   
              <ProductListItem 
                key={product.id}
                imageUrl={product.image} 
                name={product.title} 
                price={product.price} 
                id={product.id} 
              />
          ))}
          </ItemsSlider>
        </div>
        
        <div className="home-container__most-selled-list__product-list">
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
        
       
      </div>
      
    </div>
  )
}

