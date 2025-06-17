import React, { Fragment } from "react";

import {
  ButtonContainer,
  Container,
  ImageContainer,
  ResponsiveContainer,
  TextContainer,
} from "./styles";

import { AiOutlineArrowDown } from "react-icons/ai";

import profilePic from "../../../assets/images/profile-pic.png";

const HomeFirstView = () => {
  const scrollToSecondView = (): void => {
    const elementHeight =
      document.getElementById("firstContainer")?.offsetHeight;
    elementHeight && window.scrollTo(0, elementHeight + 60);
  };

  return (
    <Fragment>
      <Container id="firstContainer">
        <ResponsiveContainer>
          <TextContainer>
            <h1 data-aos="fade-up" data-aos-duration="500">
              E aí, eu sou o <span>&lt;Ryan Basque/&gt;</span><br />
              e <span>trago ideias à vida</span> com código e criatividade.
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Desenvolvedor <span>Full-Stack</span> com pegada de produto, apaixonado por
              <span>UX/UI</span>, experiências digitais e boas interfaces.
            </p>
            <p data-aos="fade-up" data-aos-duration="1500">
              Atuo na linha de frente da <span>tecnologia financeira</span>, com foco em
              soluções escaláveis e intuitivas. Trabalho atualmente na Trademaster,
              onde crio jornadas digitais para crédito B2B.
            </p>
            <p data-aos="fade-up" data-aos-duration="1700">
              Domínio de ferramentas como <span>React, React Native, Typescript, Figma</span>,
              e sempre em movimento, aprendendo sobre <span>Python, Kotlin, banco de dados e IA</span>.
            </p>
          </TextContainer>
          <ImageContainer data-aos="zoom-in-right">
            <figure>
              <img src={profilePic} alt="Ryan Basque profile" />
            </figure>
          </ImageContainer>
        </ResponsiveContainer>
        <ButtonContainer>
          <button onClick={scrollToSecondView}>
            <AiOutlineArrowDown />
          </button>
        </ButtonContainer>
      </Container>
    </Fragment>
  );
};

export default HomeFirstView;
