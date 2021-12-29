import { FaIconstyles } from "./Styles/FaIconstyles";
import {FaMicrophone,FaCommentAlt} from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import React,{ useContext } from "react";
import{ ModalContext } from './App'


const FaIcons = () => {
  const modalActive = useContext(ModalContext);
    return ( 
      <FaIconstyles>
        <Tippy content="Voice Search Tutorial">
          <div className="comments" onClick={()=>modalActive[1](true)}><FaCommentAlt/></div>
        </Tippy>
        <Tippy content="Voice Search">
          <div className="microphone" onClick={()=>modalActive[0](true)} ><FaMicrophone/></div>
        </Tippy>
        
      </FaIconstyles>
    );
}
 
export default FaIcons;