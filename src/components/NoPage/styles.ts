import styled from 'styled-components';

export const Container = styled.div`

`;

export const NoPageContainer = styled.div`

    @keyframes floating {
        0% {
            transform: translateY(-20px);
        }
        50% {
            transform: translateY(0px);
        }
        100% {
            transform: translateY(3px);
        }
    }
    /* margin: 20px; */
    position: absolute;
    width: 100%;
    text-align: center;
    /* height: 100%; */
    /* border: 1px solid red; */
    .imgs {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 30vw;//90%;
            /* max-width: 910px; */
            /* position: absolute; */
        }
        .astrounat {
            /* border: 1px solid; */
            animation: floating 3.8s linear infinite alternate-reverse;
            /* z-index: 999; */
            /* right: 10%; */
        }
        .moon {
            position: absolute;
            z-index: -1;
            /* border:1px solid; */
        }
    }
`;
