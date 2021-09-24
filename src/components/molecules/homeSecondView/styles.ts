import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Container = styled.section`
    width: 100%;
    min-height: calc(100% + 50px);

    background-color: ${colors.black};
`;

export const TitleContainer = styled.span`
    padding: 30px 25px 40px 25px;

    display: block;

    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0.015em;

    color: ${colors.white};

    h1 {
        font-size: 20px;

        @media(min-width: 800px) {
            font-size: 25px;
        }
    }

    p {
        font-size: 13px;

        @media(min-width: 800px) {
            font-size: 17px;
        }
    }
`;

export const ExperienceContainer = styled.div`
    width: 100%;

    padding: 0 25px 10px 25px;
`;