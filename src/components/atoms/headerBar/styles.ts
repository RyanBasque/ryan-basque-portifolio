import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface HeaderTitleProps {
    showInBlack: boolean;
}

export const HeaderTitle = styled.h1<HeaderTitleProps>`
    font-size: 1.5rem;
    font-weight: 300;
    font-style: italic;
    color: ${({ showInBlack }) => showInBlack ? `${colors.white}` : `${colors.black}`};
    text-transform: uppercase;

    transition: color 0.5s;

    b {
        font-weight: 800;
    }
`;