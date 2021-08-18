import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    :root {
        --maxWidth: 1450px;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #333;
    }

    main {
        margin-top: 60px;
    }

    button, svg, a {
        cursor: pointer;
    }

    svg {
        font-size: 1.5rem;
    }
    ul {
        list-style-type: none;
    }
`

export default GlobalStyles