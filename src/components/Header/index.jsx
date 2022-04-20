import "./styles.scss";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo dev books" />
        <h2>Dev Books</h2>
      </Link>

      <nav id="nav-ul">
        <button className="toggle-btn" onClick={handleShow}>
          <GiHamburgerMenu />
        </button>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Produtos</Link>
          </li>
          <li>
            <Link to="/categories">Categorias</Link>
          </li>
          <li>
            <Link to="/aboutus">Sobre nós</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart className="Cart" />
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <RiAdminFill className="Adm" />
            </Link>
          </li>
        </ul>
      </nav>

      <Offcanvas show={show} onHide={handleShow} placement="top">
        <Offcanvas.Body id="header-offcanvas">
          <ul className="offcanvas-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/categories">Categorias</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/aboutus">Sobre nós</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to="/cart">
                <FaShoppingCart className="Cart" />
              </Link>
              <Link to="/admin">
                <RiAdminFill className="Adm" />
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
