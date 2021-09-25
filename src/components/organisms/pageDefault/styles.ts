import styled from 'styled-components';
import { colors } from '../../../styles/colors';
interface HeaderBarProps {
    showBlur: boolean;
    showBlack: boolean;
}

export const PageHeaderContainer = styled.header<HeaderBarProps>`
    background-color: ${({ showBlur, showBlack }) => (showBlur && showBlack) ? 'rgba(0, 0, 0, 0.08)': 'rgba(0, 0, 0, 0.06)'};
    z-index: 10;

    height: auto;
    width: 100%;

    display: flex;
    justify-content: flex-start;

    position: fixed;

    padding: 10px 25px;

    transition: background-color 0.5s;

    color: ${({ showBlack }) => showBlack ? `${colors.white}` : `${colors.black}`};
`;

export const PageMainContainer = styled.main`
    height: 100vh;

    padding-top: 50px;

    z-index: -1;
`;