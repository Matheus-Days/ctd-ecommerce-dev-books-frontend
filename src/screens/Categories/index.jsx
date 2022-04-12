
import { CategoriesHeader, CategoryListItem } from '../../components'
import './style.scss'

const mockCategories = [{
  id: 1,
  image: 'https://picsum.photos/200/300',
  categoryName: 'Metodologias ageis',
  categoryType: 'metodologias-ageis'
}, {
  id: 2,
  image: 'https://picsum.photos/200/300',
  categoryName: 'Programação',
  categoryType: 'programacao'
}, {
  id: 3,
  image: 'https://picsum.photos/200/300',
  categoryName: 'Redes',
  categoryType: 'redes'
}, {
  id: 4,
  image: 'https://picsum.photos/200/300',
  categoryName: 'Web Design',
  categoryType: 'web-design'
}, {
  id: 5,
  image: 'https://picsum.photos/200/300',
  categoryName: 'Banco de Dados',
  categoryType: 'banco-de-dados'
}]

export function Categories() {

    return (
      <div className="categories-container">
        <CategoriesHeader categoryType="categories" />
        <div className="categories-container__item-list">
          {mockCategories.map(category => (
            <CategoryListItem
              key={category.id}
              image={category.image} 
              categoryName={category.categoryName} 
              categoryType={category.categoryType} 
            />
          ))}
        </div>
      </div>
    )
  }