import React from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";
import Comments from "../../components/Comments";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";

import "./index.css";

import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  document.title = "Pedro Alves";

  return (
    <React.Fragment>
      <Header />

      <div className="container">
        <div className="left-column">
          <Card title="Sobre mim">
            <p>
              Sou um jovem de 21 anos, em busca de novas experiências
              profissionais. Neste momento da minha vida, estou buscando evoluir
              e crescer no ramo da TI, pois acredito que nesta área ampla e
              gigante, eu possa me destacar e crescer continuamente. Desde os
              meus 18 anos eu aceitei um desafio de ir morar sozinho, bem como,
              passar por desafios inesperados. Quando aceitei o desafio da
              GrowDev para participar do processo seletivo, não foi diferente,
              me desafiei e encarei a oportunidade. Ainda não está completo do
              jeito que eu quero, mas garanto que ficará.
            </p>
          </Card>

          <Card title="Comentários">
            <Comments />
          </Card>

          <Card title="Entre em contato">
            <Contact />
          </Card>
        </div>
        <div className="right-column">
          <Card>
            <UserInfo />
          </Card>

          <Card title="Habilidades">
            <p>
              Dentre algumas habilidades que tenho, acredito que o meu
              diferencial seja a minha pró atividade em solução de problemas,
              bem como, um ótimo relacionamento em atividades com equipe. Abaixo
              algumas linguagens de programação que usei para realizar o Desafio
              e que estou em constante aprendizado:
            </p>

            <Experience />
          </Card>
        </div>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=+5551996801223"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp size={30} color="#fff" />
      </a>
    </React.Fragment>
  );
}
