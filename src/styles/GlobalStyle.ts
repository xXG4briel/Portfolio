import { createGlobalStyle } from "styled-components/"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }
    *::selection {
        background: white;
        color: var(--color-tertiary);
    }
    :root {
        --color-primary: #FFFFFF;
        --color-primary-tint: #F1F5F6;
        --color-primary-shade: #E5E5E5;
        --color-secondary: #242540;
        --color-secondary-tint: #9090AA;
        --color-secondary-shade: #43435E;
        --color-tertiary: #2087FF;
        --color-tertiary-tint: #135593;
        --color-tertiary-shade: #2D71B0;
        --text-purple-gray: #70758F;
        --text-gray-light: #C4C4C4;
        }
`