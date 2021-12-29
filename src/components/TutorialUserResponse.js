import { TutorialUserResponseStyle } from "./Styles/TutorialUserResponseStyle";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import React, { useEffect } from "react";
import {FaMicrophone} from "react-icons/fa";


const TutorialUserResponse = ({change,close}) => {
  const commands = [
    {
      command: ["*"],
      callback: (response)=> {
        if(response === 'no'){
          close(false)
          SpeechRecognition.stopListening()
        }else if(response === 'yes'){
          change(false)
          SpeechRecognition.stopListening()
        }
        
      }   
    }
  ]
  const {transcript} = useSpeechRecognition({commands})
  
  useEffect(()=>{
    if(!SpeechRecognition.browserSupportsSpeechRecognition){
      return null
    }
    SpeechRecognition.startListening({language: 'en-US',continuous: true})
    const RemoveModal = setTimeout(() => {
      close(false)
      SpeechRecognition.stopListening()
    }, 6000);  

    return () =>{
      clearTimeout(RemoveModal)
      console.log('unmounted')
    }
  },[])


  
  
  return ( 
    <TutorialUserResponseStyle>
      <div className="container1">
        <div className="container2">
          <FaMicrophone/>
        </div>
      </div>
      <h2>I'm Listening....</h2>
      
      <h3>{transcript}</h3>
    </TutorialUserResponseStyle>
    
  );
}

export default TutorialUserResponse;