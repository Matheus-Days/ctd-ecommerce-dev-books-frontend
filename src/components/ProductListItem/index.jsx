import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import "./style.scss";
import { CartContext } from "../CartProvider";
import { useApi } from "../../hooks/useApi";
import { currencyFormatter } from "../../utils/currencyFormatter";
import NumberFormat from "react-number-format";

export function ProductListItem({ className, imageUrl, name, price, id }) {
  const { cart, addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasProduct = cart.find((cartItem) => cartItem.data.id === id);
    setIsAdded(!!hasProduct);
  }, [cart, id]);

  const onProductClick = () => {
    navigate(`/product/${id}`);
  };

  const onBuyClick = (event) => {
    useApi
      .get(`/products/${id}`)
      .then((res) => {
        addToCart(res.data);
      })
      .catch((e) => e);
  };

  return (
    <div
      className={`product-list-item-wrapper${className ? ` ${className}` : ""}`}
      onClick={onProductClick}
    >
      <img
        className="product-list-item-wrapper__image"
        src={imageUrl}
        alt="Imagem do produto"
      />
      <div className="product-list-item-wrapper__product-info">
        <strong className="product-list-item-wrapper__product-name">
          {name}
        </strong>
        <NumberFormat
          className="product-list-item-wrapper__price"
          displayType="text"
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          format={currencyFormatter}
          value={price * 100}
        />
        <button
          className="product-list-item-wrapper__buy-button"
          onClick={onBuyClick}
        >
          {isAdded ? "ADICIONADO" : "COMPRAR"}
        </button>
      </div>
    </div>
  );
}
