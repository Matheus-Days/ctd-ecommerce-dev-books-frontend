import { useParams } from 'react-router-dom'

import { ProductsContainer, ProductListItem } from '../../components'
import './style.scss'

const mockProducts = [{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 1
}, {
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 2
},
{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 3
},
{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 4
},
{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 5
},
{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 6
},
{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 7
},
{
  image: 'https://picsum.photos/200/300',
  title: 'Padroes de projeto',
  price: 'R$ 80',
  id: 8
},
]

export function ProductsCategory() {
    const { category } = useParams()

    return (
      <div className="products-category-container">
        <ProductsContainer categoryType={category}>
          <div className="products-category-container__item-list">
            {mockProducts.map((product) => (
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