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
        background: #42b1ff;//var(--color-tertiary);
        color: white;
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
    @font-face {
        font-family: "LarkeNeueBold";
        src: url("./assets/fonts/LarkeNeueBold.ttf");
        src: url("./assets/fonts/LarkeNeueBold.ttf") format("ttf"),
        url("LarkeNeueBold.ttf") format("opentype");
        /* url("CustomFont.svg#filename") format("svg"); */
    }
    html {
        /* cursor: url("/assets/utils/cursor.svg"), auto; */
    }
`