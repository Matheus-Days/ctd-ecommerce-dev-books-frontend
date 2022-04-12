import "./styles.css"
import logo from "../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"
import { RiAdminFill } from "react-icons/ri"
import { Link } from "react-router-dom";


export default function Header() {

  return (
    <header id="header">
      <a id="logo">
        <img src={logo} alt='logo dev books' />
        <h2>Dev Books</h2>
      </a>

      <nav id="nav">
        <ul id="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Produtos</a></li>
        <li><a href="/aboutus">Sobre nós</a></li>  
        <li><Link to="/cart"><FaShoppingCart className="Cart" /></Link></li>
          <li><Link to="/adm"><RiAdminFill className="Adm" /></Link></li>
        </ul>
      </nav>

    </header>
  );

}