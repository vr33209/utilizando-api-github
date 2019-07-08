import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
padding:0;
outline:0;
box-sizing:border-box;
margin:0;

html, body, #root {
  height:100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    margin:0;

}

body{
  background:#0062cc;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button{
  color:#222;
  font-size:14px;
  font-family:Arial, Helvetica, sans-serif;

  button{
    cursor:pointer;
  }
}
`;
