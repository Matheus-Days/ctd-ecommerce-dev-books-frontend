import "./styles.css"
import logo from "../../screens/assets/logo.png"
import {FaShoppingCart} from "react-icons/fa"
import {RiAdminFill} from "react-icons/ri"

export default function Header() {

  return (
    <header>
      <img className="logo" src={logo} width={180} />

      <ul className="menu">
      <button className= "menu-button-home" type="button">Home</button>
      <button className= "menu-button-product" type="button">Produtos</button>
      <button className= "menu-button-about" type="button">Sobre Nós</button>
      <button className= "menu-button-cart" type="button">Carrinho</button>
      <button className= "menu-button-adm" type="button">Adm</button>

        <FaShoppingCart className="Cart"/>
        <RiAdminFill className="Adm"/>
   
      </ul>
    </header>
  );

}