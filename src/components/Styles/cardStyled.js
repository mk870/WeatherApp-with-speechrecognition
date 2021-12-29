import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(15px);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 1.2em;
  min-width: 300px;
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 15px;
  &>div{
    margin-top: 20px;
    margin-bottom: 0; 
  }
`