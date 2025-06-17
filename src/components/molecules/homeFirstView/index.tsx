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
              Olá, sou o <span>&lt;Ryan Basque/&gt;</span>
              <br />e transformo
              <span> visão de produto em experiências digitais</span>{" "}
              escaláveis.
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Sou um desenvolvedor <span>Full-Stack</span>, especializado em{" "}
              <span>React</span> e <span>React Native</span>, com forte
              orientação a<span> UX/UI</span> e design centrado no usuário.
              Tenho experiência consolidada na indústria financeira, construindo{" "}
              <span>
                soluções digitais robustas em ambientes de alta performance e
                escalabilidade
              </span>
              .
            </p>
            <p data-aos="fade-up" data-aos-duration="1500">
              Tenho experiência sólida em projetos de{" "}
              <span>tecnologia financeira</span>, contribuindo para a criação de{" "}
              <span>jornadas digitais escaláveis</span> e<span>intuitivas</span>
              . Meu background técnico combina{" "}
              <span>desenvolvimento mobile</span>,<span>interfaces ricas</span>{" "}
              e uma <span>mentalidade centrada no usuário</span>.
            </p>
            <p data-aos="fade-up" data-aos-duration="1700">
              <span>Tenho domínio técnico</span> em <span>React</span>,{" "}
              <span>React Native</span>, <span>TypeScript</span> e{" "}
              <span>Figma</span>, além de estar em constante evolução com{" "}
              <span>Python</span>, <span>Kotlin</span>,{" "}
              <span>bancos de dados</span> e aplicações de{" "}
              <span>Inteligência Artificial</span>. Atuo com uma visão de
              produto focada em <span>UX/UI estratégico</span>,{" "}
              <span>escalabilidade</span> e{" "}
              <span>entregas com alto impacto</span>.
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
