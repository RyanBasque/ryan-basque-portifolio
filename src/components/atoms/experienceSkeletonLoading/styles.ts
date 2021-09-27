import styled, { keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`  
  from { 
      background-position: -100px;
    }
  to { 
    background-position: 300px; 
    }
`;

export const SkeletonContainer = styled.div`
    width: 100%;
    height: 210px;

    margin-bottom: 20px;
    padding: 20px;
    padding-left: 0;
`;

export const SkeletonTitles = styled.div`
    width: 100%;

    div {
        border-radius: 2px;

        animation: ${SkeletonAnimation} 2s infinite linear;
        background-size: 400px;
        background-image: linear-gradient(
            90deg,
            #ddd 0px,
            #c4c4c4 40px,
            #ddd 80px
        );

        width: 30%;
        height: 20px;

        margin-top: 10px;
        margin-bottom: 30px;

        background-color: blue;

        &:first-child {
            width: 50%;

            margin: 0;
        }
    }
`;

export const SkeletonDescription = styled.div`
    border-radius: 2px;

    width: 100%;
    height: 10px;

    animation: ${SkeletonAnimation} 2s infinite linear;
    background-size: 400px;
    background-image: linear-gradient(
        90deg,
        #ddd 0px,
        #c4c4c4 40px,
        #ddd 80px
    );

    margin: 10px 0;
`;