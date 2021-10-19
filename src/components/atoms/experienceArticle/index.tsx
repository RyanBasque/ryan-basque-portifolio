import React, { Fragment } from "react";

import { ExperienceArticleProps } from "./types";
import {
  DescriptionContainer,
  DotContainer,
  ExperienceArticleContainer,
  ExperiencePainel,
  ExperienceSubTitle,
  ExperienceTitle,
  SeeMore,
  SeeMoreContainer,
  TitleContainer,
} from "./styles";

import { AiOutlineArrowRight } from "react-icons/ai";

const ExperienceContainer = ({
  showDot,
  title,
  description,
  date,
  project,
}: ExperienceArticleProps) => {
  return (
    <Fragment>
      <ExperienceArticleContainer data-aos="fade-right">
        <ExperiencePainel>
          <TitleContainer>
            <ExperienceTitle>{title}</ExperienceTitle>
            <ExperienceSubTitle>{date}</ExperienceSubTitle>
          </TitleContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
          {project && (
            <SeeMoreContainer>
              <SeeMore>Veja mais</SeeMore>
              <AiOutlineArrowRight />
            </SeeMoreContainer>
          )}
        </ExperiencePainel>
      </ExperienceArticleContainer>
      {showDot && (
        <DotContainer>
          <div data-aos="fade-right" />
        </DotContainer>
      )}
    </Fragment>
  );
};

export default ExperienceContainer;
