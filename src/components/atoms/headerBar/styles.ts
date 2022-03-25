import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    svg {
        transition: background 0.5s;
    }
`;

export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;

    height: 30px;

    transition: color 0.5s;

    @media(max-width: 500px) {
        font-size: 1.3rem;
    }

    b {
        font-weight: 800;
    }
`;

export const HamburgerInput = styled.input`
    display: none;
`;

export const Hamburger = styled.label`
    background: transparent;
    border: none;
    cursor: pointer;

    height: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 5px 0;

    &:focus {
        outline: none;
    }

    div {
        width: 1.7em;
        height: 2px;

        background: ${colors.black};

        position: relative;

        background-color: ${colors.black};
    }
    
  transform: rotate(0deg);
  transition: .5s ease-in-out;

    @media(min-width: 750px) {
        display: none;
    }

    .bar {
        transition: background 1s;
    }
`;
