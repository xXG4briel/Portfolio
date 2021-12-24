import styled from 'styled-components';

interface Props {
    fontSize: number;
}

export const Container = styled.div`

`;
export const Btn = styled.button`
    outline: 0;
    font-size: 16px;
    height: 36px;
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    border-style: none;
    min-width: 180px;
    background: #42b1ff;
    color: white; //#0e1e25;
    font-weight: 500;
    line-height: 1.25;
    transition: .2s ease;
    &:hover {
        background: #1e5fcc;
    }
    &:focus {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 1), 0 0 0 5px rgba(0, 0, 0, 1);
    }

    @media screen and (max-width: 992px) {
        height: 52px;
        &:focus {
         box-shadow: none;
        }
    }

`;