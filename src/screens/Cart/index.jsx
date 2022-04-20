import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { CartProduct } from "../../components/CartProduct";
import { CartContext } from "../../components/CartProvider";
import { currencyFormatter } from "../../utils/currencyFormatter";
import "./style.scss";

export function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      return acc + curr.quantity * curr.data?.price;
    }, 0);

    setSubTotal(totalPrice);
  }, [cart]);

  const handleQuantityChange = (id, action) => {
    const newCart = cart
      .map((product) => {
        if (id === product.data.id) {
          switch (action) {
            case "increase":
              product.quantity += 1;
              break;
            case "decrease":
              if (product.quantity > 1) product.quantity -= 1;
              break;
            case "delete":
              product = null;
              break;
            default:
          }
        }
        return product;
      })
      .filter((val) => val);

    setCart(newCart);
  };

  return (
    <div id="cart">
      <h2>Carrinho</h2>
      <div className="cart-products-container">
        <div className="cart-products">
          {cart.map((product) => (
            <CartProduct
              key={product.data.id}
              product={product}
              changeQuantity={handleQuantityChange}
            />
          ))}
          {cart.length === 0 && <p>Seu carrinho está vazio.</p>}
        </div>
      </div>
      <div className="cart-info-container">
        <div className="cart-info">
          <div className="line">
            <span className="label">Valor:</span>
            <span className="value">
              {subTotal ? (
                <NumberFormat
                  className="number"
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  format={currencyFormatter}
                  value={subTotal * 100}
                />
              ) : (
                "R$ 0,00"
              )}
            </span>
          </div>
          <div className="line">
            <span className="label">Frete:</span>
            <span className="value">
              <span className="number">Grátis</span>
            </span>
          </div>
          <div className="line">
            <span className="label">Total:</span>
            <span className="value">
              {subTotal ? (
                <NumberFormat
                  className="number"
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  format={currencyFormatter}
                  value={subTotal * 100}
                />
              ) : (
                "R$ 0,00"
              )}
            </span>
          </div>
        </div>
        <div className="btns-container">
          <Link to="/">Continuar comprando</Link>
          <button>Confirmar compra</button>
        </div>
      </div>
    </div>
  );
}
