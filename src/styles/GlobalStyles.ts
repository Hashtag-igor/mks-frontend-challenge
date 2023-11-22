import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color: #f5f5f5;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar {
        width: 5px; 
    }

    ::-webkit-scrollbar-track {
        background-color: #E5E5E5; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: #0F52BA; 
    }

`

export default GlobalStyle;