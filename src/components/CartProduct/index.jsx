import { FaTrash, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import NumberFormat from "react-number-format";

import backgroundSvg from "../../assets/product-background.svg";
import { currencyFormatter } from "../../utils/currencyFormatter";
import "./style.scss";

export function CartProduct({ product, changeQuantity }) {
  const { quantity } = product;
  const { id, title, image, price } = product?.data;

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
          src={image}
          alt={"Capa do livro " + title}
        />
        <img src={backgroundSvg} alt="" className="product-background" />
      </div>
      <div className="product-info">
        <p className="title">{title}</p>
        <NumberFormat
            className="price"
            displayType="text"
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            format={currencyFormatter}
            value={price * 100}
          />
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
