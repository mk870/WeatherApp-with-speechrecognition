import { Voicetutorialstyle } from "./Styles/VoicetutorialStyle";
import gif1 from "../Images/Ai3.gif";



const AiVoice = ({change}) => {
  const d = new Date();
  const hour = d.getHours();
  const time = ()=>{
    if (hour<12) {
      return "morning"
    }else if(hour>=12 && hour<18){
      return "afternoon"
    }else{
      return "evening"
    }
  }
  
  let utterance = new SpeechSynthesisUtterance(`good ${time()} and welcome to the voice search tutorial, to use voice search, please click the voice icon at the top right of the application, once a pop up appears, immediately say the name of the city or country you want to search, if you like me to repeat the tutorial, please say yes or no`);
  utterance.rate = 1.5;
  speechSynthesis.speak(utterance);
  utterance.onend = e => {
    console.log('Done speaking...');
    change(true);
  };
  return ( 
    <Voicetutorialstyle gif = {gif1}/>
  );
}

export default AiVoice;