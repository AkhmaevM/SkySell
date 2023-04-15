import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
          outline: none;
  }

  input:focus-within {
    outline-color: #009EE4;
  }

  *:before,
  *:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  }

  a,
  a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
  }

  button,
  ._btn {
  cursor: pointer;
  }

  ul li {
  list-style: none;
  }

  html,
  body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #000000;
  box-sizing: border-box;
  }

  div,
  button,
  a {
  font-family: 'Roboto', sans-serif;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #F1F1F1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
`;