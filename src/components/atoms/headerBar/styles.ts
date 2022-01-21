import styled from 'styled-components';

export const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;

    transition: color 0.5s;

    @media(max-width: 500px) {
        font-size: 1.3rem;
    }

    b {
        font-weight: 800;
    }
`;