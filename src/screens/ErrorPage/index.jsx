import "./styles.css"
import image from "../../assets/404.png"
import header from "../Header"
import footer from "../Footer"

export default function ErrorPage() {

  return (
    <>
    <header src={header}></header>

    <div>
      <h4>erro 404</h4>
      <h1>Página não encontrada.</h1>
      <img className="image" src={image} alt='open book'/>
    </div>

    <footer src={footer}></footer>
    </>
  );

}