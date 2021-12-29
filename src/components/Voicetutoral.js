import gif1 from "../Images/Ai3.gif";
import reactDom from "react-dom";
import React, { useState } from "react";
import TutorialUserResponse from "./TutorialUserResponse";
import AiVoice from "./AiVoice";


const Voicetutorial = ({close}) => {
  
  const [response,setResponse] = useState(false)
  const background =() =>{
    if(!response){
      return <AiVoice gif = {gif1} change={setResponse}></AiVoice>
    }else if (response){
      return <TutorialUserResponse change = {setResponse} close= {close}/>
    }
  }
  return reactDom.createPortal( 
    <>
    {background()}
    </>,
    document.getElementById('tutorialportal')
    
  );
}

export default Voicetutorial;