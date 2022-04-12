import './style.scss';
import { Slider, ProductListItem, ItemsSlider } from '../../components'
import { CategoriesList } from './components'
import { mockProducts, mockSlider } from '../../mocks'


export function Home() {
  return (
    <div className="home-container">
      <Slider items={mockSlider} />
      <CategoriesList />
      <div className="home-container__most-selled-list">
        <h4 className="home-container__most-selled-list__title">Livros mais vendidos</h4>
        <ItemsSlider>
         {mockProducts.map((product) => (
            <ProductListItem 
              imageUrl={product.image} 
              name={product.title} 
              price={product.price} 
              id={product.id} 
            />
          ))}
        </ItemsSlider>
       
      </div>
      
    </div>
  )
}

