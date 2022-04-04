import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html{
    font-size: 10px; // 10px
    font-family: "Roboto", sans-serif;
  }

  ul{
    list-style: none;
  }

  a:hover, a:visited, a:active{
    text-decoration: inherit;
    color: inherit;
  }
`;

// Sand Dollar
// #e4d4c8

// Tan
// #d0b49f

// Brown
// #a47551

// Carafe

// #523a28
