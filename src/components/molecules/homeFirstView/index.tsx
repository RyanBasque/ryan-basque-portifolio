import React, { Fragment } from "react";

import {
  ButtonContainer,
  Container,
  ImageContainer,
  ResponsiveContainer,
  TextContainer,
} from "./styles";

import profilePic from "../../../assets/images/profile-pic.png";
import arrowIcon from "../../../assets/icons/arrow-down.svg";

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
          <TextContainer data-aos="fade-up-right">
            <h1>
              Oi, meu nome é <span>&lt;Ryan Basque/&gt;</span> <br /> Eu{" "}
              <span>penso e construo</span> interfaces de sistemas.
            </h1>
            <p>
              Programador Front-end, entusiasta à área de <span>UX/UI</span> ,
              curioso e determinado.
            </p>
            <p>
              Estudo programação web desde os 16 anos, atualmente, tenho 18, com
              conhecimentos avançados em{" "}
              <span>
                React, React Native, Angular, HTML, CSS, JavaScript, Typescript,
                Figma, Git, GitHub, Bitbucket, NPM e Yarn.
              </span>
            </p>
            <p>
              Também estudo{" "}
              <span>
                Python, Java, SQL, IA - NodeRed / Jupyter, Agile Software Design
                e UX/UI.
              </span>{" "}
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
            <img src={arrowIcon} alt="Arrow Down" />
          </button>
        </ButtonContainer>
      </Container>
    </Fragment>
  );
};

export default HomeFirstView;
