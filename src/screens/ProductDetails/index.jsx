import { useContext } from "react";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import { CartContext } from "../../components/CartProvider";
import { useApi } from "../../hooks/useApi";
import { currencyFormatter } from "../../utils/currencyFormatter";
import "./style.scss";

export function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState();
  const [disableButton, setDisableButton] = useState();
  const { cart, addToCart } = useContext(CartContext);

  const getProduct = () => {
    useApi
      .get(`products/${params.productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((e) => e);
  };

  useEffect(getProduct, [params]);

  useEffect(() => {
    const itemIndex = cart.findIndex((item) => item.data.id === product?.id);
    if (itemIndex === -1) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [cart, product]);

  const handleClick = () => {
    console.log(product)
    addToCart(product);
  };

  return (
    <div id="product-details">
      <section className="product-frame">
        <img src={product?.image} alt={`Capa do livro ${product?.title}`} />
        <div className="product-info">
          <h2 className="title">{product?.title}</h2>
          <NumberFormat
            className="price"
            displayType="text"
            prefix="R$ "
            thousandSeparator="."
            decimalSeparator=","
            format={currencyFormatter}
            value={product?.price * 100}
          />
          <button
            className="add-to-cart-btn"
            disabled={disableButton}
            onClick={handleClick}
          >
            {disableButton ? "Adicionado" : "Adicionar ao carrinho"}
          </button>
        </div>
      </section>
      <section className="characteristics">
        <h3>Características</h3>
        <div className="char-frame">
          <div className="line">
            <span className="label">Autor:</span>
            <p className="text">{product?.author}</p>
          </div>
          <div className="line">
            <span className="label">Editora:</span>
            <p className="text">{product?.publishingCompany}</p>
          </div>
          <div className="line">
            <span className="label">Descrição:</span>
            <p className="text">{product?.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
