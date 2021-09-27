import React from "react";
import {
  SkeletonContainer,
  SkeletonDescription,
  SkeletonTitles,
} from "./styles";

const ExperienceSkeletonLoading = () => {
  return (
    <SkeletonContainer>
      <SkeletonTitles>
        <div />
        <div />
      </SkeletonTitles>
      <SkeletonDescription />
      <SkeletonDescription />
      <SkeletonDescription />
      <SkeletonDescription />
      <SkeletonDescription />
    </SkeletonContainer>
  );
};

export default ExperienceSkeletonLoading;
