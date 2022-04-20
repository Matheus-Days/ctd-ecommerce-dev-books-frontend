import { useCallback, useEffect, useState } from 'react'

import './style.scss';
import { ProductListItem, ItemsSlider, HomeBanner } from '../../components'
import { CategoriesList } from './components'
import { useApi } from '../../hooks/useApi'
import Banner from '../../assets/banner.png'

export function Home() {
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    await useApi.get('/products')
      .then(response => {
          setProducts(response.data.slice(0, 8))
      })
      .catch(() => null)

  }, [])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <div className="home-container">
      <HomeBanner image={Banner} />
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

