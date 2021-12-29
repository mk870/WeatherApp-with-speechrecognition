import { Globalstyles } from "./Styles/GlobalStyles";
import image1 from '../Images/30.jpg'
import image2 from '../Images/27.jpg'
import image3 from '../Images/22.jpg'
import image4 from '../Images/1.jpg'

const Background = ({temp}) => {
  
  if (!temp) {
    return <Globalstyles pic ={image3}/>
  }else if(temp && temp.main.temp <= 10){
    return <Globalstyles pic ={image1}/>
  }else if(temp && 20 > temp.main.temp &&temp.main.temp > 10 ){
    return ( <Globalstyles pic ={image4}/>)
  }else{
    return(<Globalstyles pic ={image2}/>)
  }
  
}

export default Background;
