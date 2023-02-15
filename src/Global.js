import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
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