import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-white: rgb(240, 240, 240);
    --color-light: rgb(211, 211, 211);
    --color-light-2: rgb(225, 225, 225);
    --color-grey: rgb(43, 43, 43);
    --color-grey-transp: rgba(43, 43, 43, .5);
    --color-grey-transp-2: rgba(43, 43, 43, .2);
    --color-dark: rgb(24, 24, 24);
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    //transition: all 0.5s;
}

html {
    font-size: 62.5%;
}

body {
    background: var(--color-light);
    font-family: 'Dosis', sans-serif;
    overflow-x: hidden;
    z-index: 1;
}

/* SCROLLBAR */
/* width */
::-webkit-scrollbar {
    width: 1.5rem;
    transition: all 0.5s;
}

/* Track */
::-webkit-scrollbar-track {
    background: rgba(white, 0.8);
    transition: all 0.5s;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--color-grey-transp-2);
    transition: all 0.5s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-transp);
}

p {
    font-size: 1.6rem;
}

.italic {
    font-style: italic;
}

.active {
    background: rgba(43, 43, 43, .1);
}
`;

export default GlobalStyles;