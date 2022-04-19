import './style.scss'

export function CategoriesHeader({ categoryName }) {
    return (
        <div className="categories-header">
            <h3 className="categories-header__title">{categoryName}</h3>
        </div>
    )
}

