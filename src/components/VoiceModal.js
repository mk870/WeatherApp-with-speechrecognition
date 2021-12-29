import { ModalStyle } from "./Styles/ModalStyle";
import { CloseModal } from "./Styles/CloseModalStyle";
import reactDom from "react-dom";
import { Overlay } from "./Styles/ModalOverlayStyle";
import React,{ useEffect, useState} from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AlertMsg } from "./Styles/AlertStyle";



const VoiceModal = ({close,newcity}) => {
  const commands = [
    {
      command: ["*"],
      callback: (city)=> {
        if(city){
          newcity(city)
          close(false)
          SpeechRecognition.stopListening()
        }
      } 
    }
  ]
  const {transcript} = useSpeechRecognition({commands})

  const [alertmsg, setalertmsg] = useState(false)
  useEffect(()=>{
    let utterance1 = new SpeechSynthesisUtterance("I'm listening")
    utterance1.rate = 1.5;
    speechSynthesis.speak(utterance1);
    if(!SpeechRecognition.browserSupportsSpeechRecognition){
      return null
    }
    SpeechRecognition.startListening({language: 'en-US',continuous: true})

    const logic = setTimeout(() => {
      close(false)
      SpeechRecognition.stopListening()
    }, 10000);

    const voicemsg = setTimeout(() => {
      setalertmsg(true)
    }, 6000);
    return ()=>{
      clearTimeout(logic)
      clearTimeout(voicemsg)
      SpeechRecognition.stopListening()
      console.log('unmounted')
    }
  },[])
  
  return reactDom.createPortal(
    <>
    <Overlay onClick={()=>close(false)}/>
    <ModalStyle>
      {alertmsg && <AlertMsg>Couldn't hear that Please try again or reload the app</AlertMsg>}
      <div>
        <h3>Say a City/Country Name</h3>
        <CloseModal onClick={()=>close(false)}>x</CloseModal>
      </div>
      <p>City Name:{transcript}</p>
      
    </ModalStyle>
    </>,
    document.getElementById('voiceportal')
  );
}

export default VoiceModal;