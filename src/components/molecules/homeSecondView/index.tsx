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
          {data &&
            data.map(({ id, title, description, date }, index) => {
              return (
                <ExperienceArticle
                  key={id}
                  id={id}
                  showDot={index !== data.length - 1}
                  title={title}
                  description={description}
                  date={date}
                />
              );
            })}
        </ExperienceContainer>
      </Container>
    </Fragment>
  );
};

export default HomeSecondView;
