
import { CategoriesHeader, CategoryListItem } from '../../components'
import './style.scss'
import { useCategory } from '../../providers'

export function Categories() {
    const { categories } = useCategory()

    return (
      <div className="categories-container">
        <CategoriesHeader categoryName="Categorias" />
        <div className="categories-container__item-list">
          {categories.map(category => (
            <CategoryListItem
              key={category.id}
              image={category.image} 
              categoryName={category.nome}
              id={category.id}
            />
          ))}
        </div>
      </div>
    )
  }