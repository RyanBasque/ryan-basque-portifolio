import styled from 'styled-components';
import { colors } from '../../../styles/colors';
interface HeaderBarProps {
    showBlur?: boolean;
    showBlack?: boolean;
}

export const PageHeaderContainer = styled.header<HeaderBarProps>`
    background-color: ${({ showBlur }) => (showBlur) && 'rgba(0, 0, 0, 0.06)'};
    background-color: ${({ showBlack }) => (showBlack) && 'rgba(0, 0, 0, 0.3)'};
    z-index: 10;

    height: 45px;
    width: 100%;

    @media(min-width: 750px) {
        height: 45px !important;
    }

    overflow: hidden;

    display: flex;
    flex-direction: column;

    position: fixed;

    padding: 10px 25px;

    transition: background-color 0.5s;

    color: ${({ showBlack }) => showBlack ? `${colors.white}` : `${colors.black}`};

    svg {
        color: ${({ showBlack }) => showBlack ? `${colors.white}` : `${colors.black}`};
    }

    label div {
        background: ${({ showBlack }) => showBlack ? `${colors.white}` : `${colors.black}`};
        transition: background-color 0.5s;
    }
`;

export const PageMainContainer = styled.main`
    height: 100vh;

    padding-top: 50px;

    z-index: -1;
`;