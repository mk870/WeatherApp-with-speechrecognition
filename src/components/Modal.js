import { ModalStyle } from "./Styles/ModalStyle";
import { CloseModal } from "./Styles/CloseModalStyle";
import { Btn } from "./Styles/BtnStyled";
import reactDom from "react-dom";
import { Overlay } from "./Styles/ModalOverlayStyle";
import React, { useState } from "react";
import { AlertMsg } from "./Styles/AlertStyle";



const Modal = ({close,newcity}) => {
  const [location,setlocation] = useState('')
  const [alert,setAlert] = useState(false)

  const newLocation = ()=>{
    if (location ==='') {
      setAlert(true)
      setTimeout(()=>{
        setAlert(false)
      },2000);
    }else{
      newcity(location)
      close(false)
    }
  }
  return reactDom.createPortal(
    
    <>
    <Overlay onClick={()=>close(false)}/>
    <ModalStyle>
      {alert && <AlertMsg>Please Fill in the City or Country</AlertMsg>}
      <div>
        <h3>Please Enter City or Country Name</h3>
        <CloseModal onClick={()=>close(false)}>x</CloseModal>
      </div>
      <label for="city">City/Country name:</label>
      <br/>
      
      <input 
      type="search"  name="city" 
      spellcheck="false"
      autoComplete="off"
      value={location}
      onChange={(e)=>setlocation(e.target.value)}
      />
      
      <br/>
      <Btn onClick={newLocation}>
        Save Changes
      </Btn>
    </ModalStyle>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;