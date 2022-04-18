import "./styles.scss"
import image from "../../assets/404.png"

export default function ErrorPage() {
  return (
    <div id="error-screen">
      <p>Código 404</p>
      <h1>Página não encontrada.</h1>
      <img className="image" src={image} alt='livro aberto com interrogacoes saindo'/>
    </div>
  );

}