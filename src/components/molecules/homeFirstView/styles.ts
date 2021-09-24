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
    justify-content: space-between;

    @media(min-width: 800px) {
        flex-direction: row;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 800px) {
        width: 60%;
        justify-content: center;
    }

    word-wrap: break-word;
    font-family: Lato;
    color: ${colors.black};
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    @media(min-width: 800px) {
        font-size: 20px;
        line-height: 30px;
    }

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

        @media(min-width: 800px) {
            font-size: 32px;
            line-height: 45px;
        }
    }

    p {
        margin-bottom: 3%;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    figure {
        text-align: center;

        img {
            @media(min-width: 800px) {
                max-height: 500px;
                max-width: 500px;
            }

            height: 60%;
            width: 60%;

            max-height: 300px;
            max-width: 300px;
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