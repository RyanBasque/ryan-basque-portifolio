import React from "react";
import { Link } from "react-router-dom";

import { ProjectContainer } from "./styles";
import { ProjectApresentationTypes } from "./types";

const ProjectApresentation = ({
  index,
  imageUrl,
  name,
  background,
}: ProjectApresentationTypes) => {
  return (
    <ProjectContainer
      className={`item-${String(index)}-grid`}
      grid={String(index)}
      background={background}
    >
      <a>
        <img src={imageUrl} alt={name} />
      </a>
    </ProjectContainer>
  );
};

export default ProjectApresentation;
