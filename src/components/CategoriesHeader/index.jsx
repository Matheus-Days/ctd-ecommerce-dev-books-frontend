import './style.scss'
import { categoryTypes } from '../../config'

export function CategoriesHeader({ categoryType }) {
    return (
        <div className="categories-header"><h3 className="categories-header__title">{categoryTypes[categoryType] ?? categoryTypes.default}</h3></div>
    )
}

