import React, { useContext, useEffect, useState } from 'react'

import './style.scss'
import { CartContext } from '../../App'

export function ProductListItem({ className, imageUrl, name, price, id }) {
    const { cart } = useContext(CartContext)
    const [isAdded, setIsAdded] = useState(false)

    useEffect(() => {
       const hasProduct = cart.find(cartItem => cartItem.id === id)
       setIsAdded(!!hasProduct)
    }, [cart, id])

    const onProductClick = () => {
        console.log('id', id)
    }

    const onBuyClick = (event) => {
        console.log('buy', id)
        event.stopPropagation()
    }

    return <div className={`product-list-item-wrapper${className ? ` ${className}` : ''}`} onClick={onProductClick}>
        <img className="product-list-item-wrapper__image" src={imageUrl} alt="Imagem do produto" />
        <div className="product-list-item-wrapper__product-info">
            <strong className="product-list-item-wrapper__product-name">{name}</strong>
            <span className="product-list-item-wrapper__price">R$ {price.toFixed(2)}</span>
            <button className="product-list-item-wrapper__buy-button" onClick={onBuyClick}>{isAdded ? 'ADICIONADO' : 'COMPRAR'}</button>
        </div>
    </div>
}