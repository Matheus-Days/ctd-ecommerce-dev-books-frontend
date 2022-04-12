import "./styles.css"
import logo from "../../assets/logo.png"

export default function Footer() {

  return (
    
    <footer>
      <img className= "logo" src={logo} alt='logo dev books' />
      <p className="footer-text">Dev Books S/A | CNPJ 62.410.352/0001-72  | © Copyrights 2022</p>
    </footer>
  );

}