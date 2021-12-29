import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  opacity: 1; 
  transition: 200ms ease-in-out;  
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.8); 
  pointer-events: all;
`