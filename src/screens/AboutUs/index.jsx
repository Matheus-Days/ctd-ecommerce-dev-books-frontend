import "./styles.scss";
import { SiGithub } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import andre from "../../assets/profile/andre.png";
import jehan from "../../assets/profile/jehan.jpeg";
import marcia from "../../assets/profile/marcia.jpg";
import matheus from "../../assets/profile/matheus.jpg";
import renan from "../../assets/profile/renan.png";
import vanessa from "../../assets/profile/vanessa.jpg";

const data = [
  {
    name: "André Wilson Padilha",
    Git: "https://github.com/awpadilha",
    Linkedin: "https://www.linkedin.com/in/awpadilha/",
    image: andre,
  },
  {
    name: "Jehan Lucas Vieira e Silva",
    Git: "https://github.com/lucasriber01",
    Linkedin: "https://www.linkedin.com/mwlite/in/jehanlucas#image-modal",
    image: jehan,
  },
  {
    name: "Marcia Yurie Yano",
    Git: "https://github.com/marciayano",
    Linkedin: "https://www.linkedin.com/in/marciayurieyano/",
    image: marcia,
  },
  {
    name: "Matheus Braga Dias",
    Git: "https://github.com/Matheus-Days",
    Linkedin: "https://www.linkedin.com/in/matheus-braga-dias-6129a31b0/",
    image: matheus,
  },
  {
    name: "Renan de Andrade Joaquim",
    Git: "https://github.com/rejoaquim",
    Linkedin: "https://www.linkedin.com/in/renan-aj/",
    image: renan,
  },
  {
    name: "Vanessa Matos",
    Git: "https://github.com/vanessa-maganhoto",
    Linkedin: "https://www.linkedin.com/in/vanessa-matos-5a801416a/",
    image: vanessa,
  },
];

export default function AboutUs() {
  return (
    <>
      <div id="profile">
        <div className="profile-intro">
          <h1 className="profile-title">Time de Desenvolvedores Dev Books</h1>
          <p className="profile-txt">
            Somos alunos do 3º bimestre do Curso de Programação Certified Tech
            Developer, pensado e desenhado pelo Mercado Livre, Globant e a
            Digital House. Obrigado pela visita!
          </p>
        </div>

        <ul className="card-list">
          {data.map(({ image, name, Linkedin, Git }) => (
            <li className="item-list-card">
              <img
                src={image}
                className="card-image"
                alt="foto dos integrantes"
              />
              <div className="card-social">
                <h3 className="card-name">{name}</h3>
                <div className="card-media">
                  <a
                    className="card-git"
                    href={Git}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <SiGithub color="black" />
                  </a>
                  <a
                    className="card-linkedin"
                    href={Linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineLinkedin color="black" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
