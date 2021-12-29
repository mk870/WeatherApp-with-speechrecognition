import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%,-50%) scale(1);
  transition: 200ms ease-in-out;
  border:2px solid rgba(255,255,255,0.5);
  border-radius: 10px;
  z-index: 10;
  width: 500px;
  max-width: 80%;
  background-color: rgba(210, 210, 252, 0.726);

  & > div{
    margin-left: 10px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content:space-between;
  }

  & > label{
    margin-left: 10px;
  }

  & > input{
    margin-left: 10px;
    margin-top: 10px;
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid crimson;
    font-size: 1.2em;
  }
  & > p{
    margin-left: 10px;
    
  }
  }
`