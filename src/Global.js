import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: '16px';
    line-height: '19px';
    text-align: 'center';
}

a {
    text-decoration:none;
}

a:visited{
    color:inherit;
}
button {
    cursor: pointer;
}
`
