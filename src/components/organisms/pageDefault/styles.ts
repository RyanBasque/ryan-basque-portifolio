import styled from 'styled-components';
interface HeaderBarProps {
    showBlur: boolean;
}

export const PageHeaderContainer = styled.header<HeaderBarProps>`
    background-color: ${({ showBlur }) => showBlur && 'rgba(0, 0, 0, 0.06)'};
    z-index: 10;

    height: auto;
    width: 100%;

    display: flex;
    justify-content: flex-start;

    position: fixed;

    padding: 10px 25px;

    transition: background-color 0.5s;
`;

export const PageMainContainer = styled.main`
    height: 100vh;

    padding-top: 50px;

    z-index: -1;
`;