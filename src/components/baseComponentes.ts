import styled from 'styled-components';

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
export const BtnDownload = styled.a.attrs((props: any) => ({
    color: props.color ?? "white",
    background: props.background ?? "white",
    backgroundHover: props.backgroundHover ?? "#e0e0e0",
}))`
    text-decoration: none;
    outline: 0;
    font-size: 16px;
    height: 36px;
    border-radius: 6px;
    padding: 8px 16px;
    cursor: pointer;
    border-style: none;
    min-width: 180px;
    background: ${props => props.background};// 
    color: ${props => props.color};
    font-weight: 500;
    line-height: 1.25;
    transition: .2s ease;
    &:hover {
        background: ${ props => props.backgroundHover };
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

const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
`;