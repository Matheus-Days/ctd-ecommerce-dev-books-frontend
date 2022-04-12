import { useNavigate } from 'react-router-dom'

import './style.scss'

export function CategoryListItem({ image, categoryName, categoryType }) {
    const navigate = useNavigate()

    const onContainerClick = () => {
        navigate(`/products/${categoryType}`)
    }

    return (
        <div className="category-list-item-wrapper" onClick={onContainerClick}>
            <img src={image} alt="Imagem da categoria" className="category-list-item-wrapper__image"/>
            <strong className="category-list-item-wrapper__category-name">{categoryName}</strong>
        </div>
    )
}