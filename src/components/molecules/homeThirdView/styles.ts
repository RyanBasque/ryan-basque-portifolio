import styled from "styled-components";
import { colors } from '../../../styles/colors';

export const Container = styled.section`
    width: 100%;
    min-height: calc(100%);

    background-color: ${colors.white};

    canvas {
        position: absolute !important;
        top: unset !important;
        min-height: calc(100%);

        z-index: 1;
    }

    @media(max-width: 800px) {
        #tsparticlesDesktop {
            display: none;
        }
    }

    @media(min-width: 800px) {
        #tsparticlesDesktop {
            display: block;
        }
    }
`;

export const ProjectsContainer = styled.div``;

export const ProjectsContainerTitle = styled.span`
    padding: 20px 25px 40px 25px;

    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0.015em;
    color: ${colors.black};

    @media (min-width: 800px) {
        font-size: 25px;
    }

    h1 {
        font-size: 20px;
        @media (min-width: 800px) {
            font-size: 25px;
        }
    }

    p {        
        display: initial;

        font-size: 20px;
        color: ${colors.orange};

        @media (min-width: 800px) {
            font-size: 25px;
        }
    }
`;

export const ProjectsContainerContent = styled.div`
    width: 100%;
    padding: 0 25px 10px 25px;
`;