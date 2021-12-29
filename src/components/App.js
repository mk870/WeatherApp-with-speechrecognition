import React, { useEffect,useState } from "react";
import Display from "./Display";
import { Btn } from "./Styles/BtnStyled";
import { Card } from "./Styles/cardStyled";
import Modal from "./Modal";
import Background from "./Background";
import VoiceModal from "./VoiceModal";
import { createContext } from "react";
import Voicetutorial from "./Voicetutoral";
import  FaIcons  from "./FaIcons";

export const ModalContext = createContext(null)
const App = () => {
  const Apikey = 'd17f5f291de02f9f81c93f2ebe2c2568'
  const [city,setCity] = useState('London')
  const [weather, setweather] = useState(null)
  const [open,setOpen] = useState(false)
  const [Errors,setError] = useState(null)
  const[voicemodal,setVoicemodal] = useState(false)
  const[tutorial,settutorial] = useState(false)

  
  useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Apikey}`)
    .then(res =>{
      if (!res.ok) {
        throw Error('Could not fetch data please check your network connection or verify your city name')
      }else{
        return res.json()
      }
    } )
    .then(data =>{
      setweather(data)
      setError(null)
    })
    .catch(e =>{
      setError(e.message)
    })
  },[city])
  
  return ( 
    <ModalContext.Provider value ={[setVoicemodal,settutorial]}>
      <Card>
        <FaIcons/>
        <Display info = {weather} errors={Errors}/>
        <Background temp ={weather}/>
        <Btn onClick={()=>setOpen(true)}>
          Change Location
        </Btn>
      </Card>
      {open && <Modal close = {setOpen} newcity ={setCity}/>}
      {voicemodal && <VoiceModal close = {setVoicemodal} newcity ={setCity}/>}
      {tutorial && <Voicetutorial close ={settutorial}/>}
    </ModalContext.Provider>
    );
}
export default App;