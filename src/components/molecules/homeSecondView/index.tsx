import React, { Fragment } from "react";
import { ExperienceArticle } from "../../atoms";

import { Container, ExperienceContainer, TitleContainer } from "./styles";

import { SecondViewProps } from "./types";

const HomeSecondView = ({ data }: SecondViewProps) => {
  return (
    <Fragment>
      <Container>
        <TitleContainer>
          <h1>Experiência profissional</h1>
          <p>Agosto de 2019 - atual</p>
        </TitleContainer>
        <ExperienceContainer>
          {data && data.map((e) => <ExperienceArticle key={e.id} />)}
        </ExperienceContainer>
      </Container>
    </Fragment>
  );
};

export default HomeSecondView;
