import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import { CartProduct } from "../../components/CartProduct";
import "./style.css";

export function Cart() {
  const {cart, setCart} = useContext(CartContext);
  
  const handleQuantityChange = (id, action) => {
    const newCart = cart.map(product => {
      if(id === product.id) {
        switch(action) {
          case 'increase':
            product.quantity += 1;
            break;
          case 'decrease':
            if(product.quantity > 1)
              product.quantity -= 1;
            break;
          case 'delete':
            product = null;
            break;
          default:
        }
      }
      return product;
    });
    setCart(newCart.filter(val => val));
  };

  return (
    <div id="cart">
      <h2>Carrinho</h2>
      <div className="cart-products-container">
        <div className="cart-products">
          {cart.map((product) => (
            <CartProduct
              key={product.id}
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
              <span className="cypher">R$</span>
              <span className="number">141,80</span>
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
              <span className="cypher">R$</span>
              <span className="number">141,80</span>
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
