import React from "react";
import Particles from "react-tsparticles";

import {
  Container,
  ProjectsContainer,
  ProjectsContainerContent,
  ProjectsContainerTitle,
} from "./styles";
import { colors } from "./../../../styles/colors";
import { ThirdViewProps } from "./types";

const HomeThirdView = ({ data }: ThirdViewProps) => {
  return (
    <Container>
      <Particles
        id="tsparticlesMobile"
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: colors.orange,
            },
            links: {
              enable: true,
              color: colors.orange,
              distance: 100,
            },
            move: {
              enable: true,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <Particles
        id="tsparticlesDesktop"
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: colors.orange,
            },
            links: {
              enable: true,
              color: colors.orange,
              distance: 180,
            },
            move: {
              enable: true,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      <ProjectsContainer>
        <ProjectsContainerTitle>
          <h1>
            Melhores <p>&lt;projetos/&gt;</p>
          </h1>
        </ProjectsContainerTitle>
        <ProjectsContainerContent>opa</ProjectsContainerContent>
      </ProjectsContainer>
    </Container>
  );
};

export default HomeThirdView;
