import React from "react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";

const About = () => (
  <div className="About">

    <h1>Quem sou eu?</h1>

    <p>Meu nome é Fabrício Caldana Anelli, tenho 21 Anos. Atualmente curso Análise e Desenvolvimento de Sistemas pela   universidade Ritter dos Reis (Uniritter) em Canoas/RS.
    Desde pequeno sempre amei Tecnologia, como a grande maioria, fui aquele garoto
      que adorava ficar horas e horas na frente de um computador, jogando, vendo vídeos e me divertindo com meus
      amigos.
    Conheci a programação com 18 anos, e me apaixonei, eu podia ser o "Deus" do meu próprio mundo,
      bastava adquirir conhecimento e ter um pouco de criatividade.
    A partir disso comecei meus estudos com a programação, visando me tornar um desenvolvedor Front-End, atualmente estou estudando e me aperfeiçoando com
      HTML5, CSS3, JavaScript e ReactJS. 
    A minha primeira oportunidade profissional foi no Grupo Dimed como Estagiário, onde adquiri
      conhecimento com alguns frameworks Back-End, como SpringBoot, e de Front-End, como ReactJS e Angular.
      </p>

    <h1>Minhas Habilidades</h1>

    <p>
      - Atendimento e Suporte. <br/>
      - Domínio das Redes Sociais. <br/>
      - Resolução de Problemas. <br/>
      - Grande atenção aos Detalhes. <br/>
      - Conhecimento com Manutenção/Montagem de Computadores. <br/>
      - Conhecimento Avançado em informática: Windows, Photoshop, Pacote Office, Entre outros. <br/>
      - Experiências com GitHub e GitLab. <br/>
      - Conhecimento básico com algumas linguagens de programação: JavaScript, C, Java. <br/>
      - Conhecimentos com desenvolvimento Web: HTML5, CSS3. <br/>
      - Conhecimento básico com alguns frameworks Front-End como ReactJS e Angular.
    </p>

    <h1>Formação e Cursos</h1>

    <p>
      - Ensino Médio Completo. <br/>
      - Cursando Faculdade de Análise
      e Desenvolvimento de Sistemas - UniRitter(4º Semestre). <br/>
      - Curso Desenvolvedores Trainee (PUC-RS).
    </p>

    <h1>Experiências</h1>

    <p>
      - Grupo Dimed (Estágio de desenvolvimento Front-End) 02/08/21
      até o presente momento. <br/>
      - Freelancer em Manutenção/Montagem de
      Computadores, 2018 a 2021.
    </p>

    <h1>Idiomas</h1>

    <p>
      Inglês - Conhecimento Intermediário. <br/> 
      Espanhol - Conhecimento Básico.
    </p>

    <h1>Redes Sociais</h1>

    <p className="p-icons">
      <a href="https://www.facebook.com/FabricioScoooby/" target="_blank" rel="noreferrer">
        <SiFacebook className="icons"/>
      </a>
      <a href="https://www.instagram.com/notrealscooby/?hl=pt-br" target="_blank" rel="noreferrer">
        <SiInstagram className="icons"/>
      </a>
      <a href="https://github.com/NcryScooby" target="_blank" rel="noreferrer">
        <GoMarkGithub className="icons"/>
      </a>
        <a href="https://wa.me/5551982209982" target="_blank" rel="noreferrer">
          <SiWhatsapp className="icons"/>
        </a>
      <abbr title="fabricio_c_anelli@hotmail.com">
        <a href="mailto:fabricio_c_anelli@hotmail.com" target="_blank" rel="noreferrer">
          <MdOutlineEmail className="icons"/>
        </a>
      </abbr>
    </p>
  </div>
);

export default About;
