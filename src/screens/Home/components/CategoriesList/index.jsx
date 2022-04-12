import { Link } from 'react-router-dom'

import { mockCategories } from '../../../../mocks'
import './style.scss'

export function CategoriesList() {
    return (
        <div className="categories-list-wrapper">
            <h5 className="categories-list-wrapper__title">Categorias</h5>
            <div className="categories-list-wrapper__item-list">
            {mockCategories.map(category => (
                <Link key={category.id} className="categories-list-wrapper__item" to={`/products/${category.categoryType}`}>{category.categoryName}</Link>
            ))}
            </div>
        </div>
    )

}