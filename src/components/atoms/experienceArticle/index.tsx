import React, { Fragment } from "react";

import { ExperienceArticleProps } from "./types";
import {
  DescriptionContainer,
  DotContainer,
  ExperienceArticleContainer,
  ExperiencePainel,
  ExperienceSubTitle,
  ExperienceTitle,
  TitleContainer,
} from "./styles";

const ExperienceContainer = ({
  showDot,
  title,
  description,
  date,
}: ExperienceArticleProps) => {
  return (
    <Fragment>
      <ExperienceArticleContainer>
        <ExperiencePainel>
          <TitleContainer>
            <ExperienceTitle>{title}</ExperienceTitle>
            <ExperienceSubTitle>{date}</ExperienceSubTitle>
          </TitleContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
        </ExperiencePainel>
      </ExperienceArticleContainer>
      {showDot && (
        <DotContainer>
          <div />
        </DotContainer>
      )}
    </Fragment>
  );
};

export default ExperienceContainer;
