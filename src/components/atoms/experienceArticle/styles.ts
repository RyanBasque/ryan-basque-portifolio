import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const ExperienceArticleContainer = styled.article`
    width: 100%;

    border-left: solid 2px ${colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ExperiencePainel = styled.div`
    width: 95%;
`;

export const TitleContainer = styled.div`
    margin-bottom: 30px;
    margin-top: 5px;
`;

export const ExperienceTitle = styled.h1`
    font-size: 15px;
    line-height: 132%;
    letter-spacing: 0.015em;
    color: ${colors.orange};

    @media(min-width: 800px) {
        font-size: 20px;
    }
`;

export const ExperienceSubTitle = styled.h2`
    font-weight: 300;
    font-size: 13px;
    line-height: 132%;
    letter-spacing: 0.015em;
    color: ${colors.white};

    @media(min-width: 800px) {
        font-size: 17px;
    }
`;

export const DescriptionContainer = styled.span`
    display: block;

    margin-bottom: 8px;

    font-weight: 300;
    font-size: 13px;
    line-height: 132%;
    letter-spacing: 0.015em;
    word-wrap: break-word;
    color: ${colors.white};

    @media(min-width: 800px) {
        font-size: 17px;
    }
`;

export const DotContainer = styled.div`
    width: 100%;

    display: flex;

    margin-bottom: 10px;

    div {
        width: 10px;
        height: 10px;

        border-radius: 100%;

        background-color: ${colors.white};

        margin-left: -4.5px;
        margin-top: 10px;
    }
`;