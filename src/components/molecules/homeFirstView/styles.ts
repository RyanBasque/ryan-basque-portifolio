import styled from 'styled-components';
import { colors } from './../../../styles/colors';

export const Container = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 0 25px;
`;

export const ResponsiveContainer = styled.div`
    height: 80%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    word-wrap: break-word;
    font-family: Lato;
    color: ${colors.black};
    font-weight: 300;
    font-size: 14px;
    line-height: 132%;

    span {
            font-weight: bold;
            color: ${colors.orange};
        }

    h1 {
        font-style: italic;
        font-size: 16px;
        line-height: 19px;
        font-weight: 300;
        color: '#000';

        margin-bottom: 5%;
    }

    p {
        margin-bottom: 2.8%;
    }
`;

export const ImageContainer = styled.div`

    figure {
        text-align: center;

        img {
            height: 60%;
            width: 60%;

            max-height: 450px;
            max-width: 450px;
        }
    }
`;

export const ButtonContainer = styled.div`
    height: 20%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    button {
        cursor: pointer;
        
        background-color: ${colors.grey};

        width: 40px;
        height: 40px;

        border-radius: 100%;
        border: none;
    }
`;