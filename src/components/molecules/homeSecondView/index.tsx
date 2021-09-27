import React, { Fragment, useState } from "react";

import { Container, ExperienceContainer, TitleContainer } from "./styles";
import { SecondViewProps } from "./types";

import { ExperienceArticle, ExperienceSkeletonLoading } from "../../atoms";

const HomeSecondView = ({ data }: SecondViewProps) => {
  const [skeletonController] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <Fragment>
      <Container>
        <TitleContainer>
          <h1>Experiência profissional</h1>
          <p>Agosto de 2019 - atual</p>
        </TitleContainer>
        <ExperienceContainer>
          {data.length
            ? data.map(({ id, title, description, date, count }, index) => {
                return (
                  <ExperienceArticle
                    count={count}
                    key={id}
                    id={id}
                    showDot={index !== data.length - 1}
                    title={title}
                    description={description}
                    date={date}
                  />
                );
              })
            : skeletonController.map(() => {
                return <ExperienceSkeletonLoading />;
              })}
        </ExperienceContainer>
      </Container>
    </Fragment>
  );
};

export default HomeSecondView;
