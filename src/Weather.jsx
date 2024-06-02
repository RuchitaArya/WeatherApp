import React, { useState } from "react";
import styles from "./Weather.module.css";
import axios from "axios";


function Weather(){
    const  [location,setLocation]=useState("");
    const [request,setRequest]=useState({});
  
   const Url=  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0aabf97c06868fe0de23a3ae41a8ff78`;
const setWeather=()=>{
        axios.get(Url).then((response)=>{
            setRequest(response.data);
           console.log(response.data)
          
        });
}

return(
   <div className={styles.weatherimg}>
    <input type="text" className={styles.userInput}
    placeholder="Search"
    value={location} onChange={(e)=>setLocation(e.target.value)}/>
    <button className={styles.searchButton} onClick={setWeather}><i class="fa-solid fa-magnifying-glass fa-lg"></i></button>
    <h1 className={styles.city}>Name:{request.name}</h1>
    <h2 className={styles.temperature}>Temp: {request.main? <span>{request.main.temp}</span>:null}C</h2>
    <h1 className={styles.temperature}>Id:{request.id? <span>{request.id}</span>:null}</h1>
   </div>
    )
}
export default Weather;