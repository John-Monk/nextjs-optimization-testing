import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    ${'' /* scrollbar-gutter: stable; */}
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    margin: 0 auto;
  }

  .section {
    min-height: calc(100vh - 58.6px);
  }

  @media screen and (min-width: 860px) {
    .container {
      max-width: 800px;
    }

  }

  @media screen and (min-width: 1200px) {
      .container {
        max-width: 1000px;
      }
  }

`;
 
export default GlobalStyle;