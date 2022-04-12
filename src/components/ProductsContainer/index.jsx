import { Link } from 'react-router-dom'

import './style.scss'
import { CategoriesHeader } from '../CategoriesHeader'

export function ProductsContainer({ categoryType, children, showSideMenu = true }) {
        const linkStyle = (category) => `product-container__wrapper__link ${categoryType === category ? 'product-container__wrapper__link--active' : ''}`

        return (
            <div className="product-container">
                <CategoriesHeader categoryType={categoryType} />
                <div className="product-container__wrapper">
                    {showSideMenu && <aside className="product-container__wrapper__side-menu">
                        <Link className="product-container__wrapper__category" to="/categories">Categorias</Link>
                        <div>
                            <Link className={linkStyle('metodologias-ageis')} to="/products/metodologias-ageis">Metodologias ageis</Link>
                            <Link className={linkStyle('programacao')} to="/products/programacao">Programação</Link>
                            <Link className={linkStyle('banco-de-dados')} to="/products/banco-de-dados">Banco de dados</Link>
                            <Link className={linkStyle('web-design')} to="/products/web-design">Web design</Link>
                            <Link className={linkStyle('redes')} to="/products/redes">Redes</Link>
                        </div>
                    </aside>}
                    <div className="product-container__wrapper__container">{children}</div>
                </div>
            </div>
        )
}
