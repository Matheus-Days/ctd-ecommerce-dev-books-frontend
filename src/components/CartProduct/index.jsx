import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

import backgroundSvg from "../../assets/product-background.svg";
import "./style.css";

export function CartProduct({ product, changeQuantity }) {
  const { id, title, coverSrc, price, quantity } = product;

  const increaseQuantity = () => {
    changeQuantity(id, 'increase');
  };

  const decreaseQuantity = () => {
    changeQuantity(id, 'decrease');
  };

  const deleteItem = () => {
    changeQuantity(id, 'delete');
  };

  return (
    <div className="cart-product">
      <div className="img-cotainer">
        <img
          className="product-picture"
          src={coverSrc}
          alt={"Capa do livro " + title}
        />
        <img src={backgroundSvg} alt="" className="product-background" />
      </div>
      <div className="product-info">
        <p className="title">{title}</p>
        <p className="price">R$ {price}</p>
        <div className="quantity-container">
          <span>
            <button onClick={decreaseQuantity}>
              <FaMinusCircle />
            </button>
            <span className="quantity">{quantity}</span>
            <button onClick={increaseQuantity}>
              <FaPlusCircle />
            </button>
          </span>
          <button className="remove-btn" onClick={deleteItem}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
