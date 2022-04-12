import { useParams } from 'react-router-dom'

import { ProductsContainer, ProductListItem } from '../../components'
import './style.scss'
import { mockProducts } from '../../mocks'

export function Products() {
  const { category } = useParams()

  return (
    <div className="products-category-container">
      <ProductsContainer categoryType={category}>
        <div className="products-container__item-list">
          {mockProducts.map((product) => (
            <ProductListItem 
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
