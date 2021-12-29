import { createGlobalStyle } from "styled-components";

export const Globalstyles = createGlobalStyle`
  body{
    background-image: url(${props=>props.pic});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed; 
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    justify-content: center;
    
  }
  
`