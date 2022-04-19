import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCategory } from '../../providers'


import './style.scss'
import { CategoriesHeader } from '../CategoriesHeader'

export function ProductsContainer({ children, showSideMenu = true }) {
        const { categoryId } = useParams() 
        const { categories, isCategoryLoaded, getCategory } = useCategory()

        const [selectedCategory, setSelectedCategory] = useState({})

        useEffect(() => {
            if (isCategoryLoaded) {
              setSelectedCategory(getCategory(+categoryId))
            }
          }, [isCategoryLoaded, categoryId, getCategory])
        
        const linkStyle = (category) => `product-container__wrapper__link ${categoryId === category ? 'product-container__wrapper__link--active' : ''}`

        return (
            <div className="product-container">
                <CategoriesHeader categoryName={selectedCategory.nome ?? 'Todos os Produtos'} />
                <div className="product-container__wrapper">
                    {showSideMenu && <aside className="product-container__wrapper__side-menu">
                        <Link className="product-container__wrapper__category" to="/categories">Categorias</Link>
                        <div>
                            {categories.map(category => (
                                 <Link key={category.id} className={linkStyle(category.id)} to={`/products/${category.id}`}>{category.nome}</Link>
                            ))}
                        </div>
                    </aside>}
                    <div className="product-container__wrapper__container">{children}</div>
                </div>
            </div>
        )
}
