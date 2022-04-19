import { Link } from 'react-router-dom'

import { useCategory } from '../../../../providers'
import './style.scss'

export function CategoriesList() {
    const { categories } = useCategory()

    return (
        <div className="categories-list-wrapper">
            <h5 className="categories-list-wrapper__title">Categorias</h5>
            <div className="categories-list-wrapper__item-list">
            {categories.map(category => (
                <Link key={category.id} className="categories-list-wrapper__item" to={`/products/${category.id}`}>{category.nome}</Link>
            ))}
            </div>
        </div>
    )

}