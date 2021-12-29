import { Wrapper } from "./Styles/Wrapper";


const Display = ({info,errors}) => {
  if (!info && !errors) {
    return <div><h3 style={{color:'red'}}>Loading...</h3></div>
  }else if (errors) {
    return <div><h3 style={{color:'red'}}>{errors}</h3></div>
  }else{
    return ( 
      <Wrapper>
        <h1>{info.name}</h1>
        <h3>{(info.main.temp).toFixed(0)}°C ({((info.main.temp * 9/5) + 32).toFixed(0)}°F)</h3>
        <h3>{info.weather[0].description}</h3>
        <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="picture" height='60px' width='60px'/>
        <ul>
          <li>Humidity: {info.main.humidity}%</li>
          <li>Wind Speed: {(info.wind.speed*3.6).toFixed(0)} km/hr</li>
          <li>Pressure: {info.main.pressure} hPa</li>
          <li>Max Temp: {(info.main.temp_max).toFixed(0)}°C ({((info.main.temp_max * 9/5) + 32).toFixed(0)}°F)</li>
          <li>Min Temp: {(info.main.temp_min).toFixed(0)}°C ({((info.main.temp_min * 9/5) + 32).toFixed(0)}°F)</li>
          <li>Country: {info.sys.country}</li>
        </ul>
        
      </Wrapper>
      
  );
  }
  
}

export default Display;