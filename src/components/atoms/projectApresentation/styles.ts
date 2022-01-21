import styled from 'styled-components';

interface ProjectContainerTypes {
  background: string;
  grid: string;
}

export const ProjectContainer = styled.div<ProjectContainerTypes>`
  width: 100%;

  z-index: 10;

  padding: 30px;

  background-color: ${props => props.background};

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  img {
    width: 300px;
  }
`;