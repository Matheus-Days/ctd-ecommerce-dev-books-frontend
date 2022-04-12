import "./styles.scss"
import logo from "../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"
import { RiAdminFill } from "react-icons/ri"
import { Link } from "react-router-dom";


export default function Header() {

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt='logo dev books' />
        <h2>Dev Books</h2>
      </Link>

      <nav>
        <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Produtos</Link></li>
        <li><Link to="/categories">Categorias</Link></li>
        <li><Link to="/aboutus">Sobre nós</Link></li>  
        <li><Link to="/cart"><FaShoppingCart className="Cart" /></Link></li>
          <li><Link to="/admin"><RiAdminFill className="Adm" /></Link></li>
        </ul>
      </nav>

    </header>
  );

}