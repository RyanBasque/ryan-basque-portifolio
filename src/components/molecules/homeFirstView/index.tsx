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
              Oi, meu nome é <span>&lt;Ryan Basque/&gt;</span> <br /> Eu{" "}
              <span>penso e construo</span> interfaces de sistemas.
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Desenvolvedor Full-stack, entusiasta à área de <span>UX/UI</span>{" "}
              , curioso e determinado.
            </p>
            <p data-aos="fade-up" data-aos-duration="1500">
              Estudo programação web desde os 16 anos, atualmente com 22 e me
              formado na <span>FIAP - Análise e Desenvolvimento de Sistemas</span> com conhecimentos avançados em{" "}
              <span>
                React, React Native, Angular, JavaScript, Typescript, Figma,
                Git, Bitbucket.
              </span>
            </p>
            <p data-aos="fade-up" data-aos-duration="1700">
              Também estudo{" "}
              <span>Python, Java, SQL, Pl/SQL, Scrum, Kotlin.</span>{" "}
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
