import styled from "styled-components";


export const TutorialUserResponseStyle = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background: white;
  display:flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  align-items: center;
  justify-content: center;
  .container2{
    background: red;
    padding: 20px;
    border-radius: 60%;
    transform:scale(2);
    z-index: 0;
    color:white;
  }
  
  .container1{
    background: white;
    padding: 40px;
    border-radius: 60%;
    animation: backgroundDiv1 1s linear infinite alternate;
    z-index: 0;
  }
  h2{
    z-index: 10;
  }
  
  
  @keyframes backgroundDiv1 {
  0%   {background:white;padding: 40px;}
  100% {background: grey;padding: 80px;}
  }
}
`