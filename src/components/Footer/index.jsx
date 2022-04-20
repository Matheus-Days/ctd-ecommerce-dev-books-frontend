import "./styles.scss"
import logo from "../../assets/logo.png"

export default function Footer() {

  return (
    
    <footer>
      <img className= "logo" src={logo} alt='logo dev books' />
      <p>Dev Books S/A | CNPJ 01.234.567/0001-01  | © Copyrights 2022</p>
    </footer>
  );

}
