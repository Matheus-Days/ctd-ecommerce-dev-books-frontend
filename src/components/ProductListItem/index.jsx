import './style.scss'

export function ProductListItem({ imageUrl, name, price, id }) {
    const onBuyClick = () => {
        console.log('id', id)
    }

    return <div className="product-list-item-wrapper" onClick={onBuyClick}>
        <img className="product-list-item-wrapper__image" src={imageUrl} alt="Imagem do produto" />
        <strong className="product-list-item-wrapper__product-name">{name}</strong>
        <span className="product-list-item-wrapper__price">{price}</span>
        <button className="product-list-item-wrapper__buy-button">COMPRAR</button>
    </div>
}