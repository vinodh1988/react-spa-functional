import axios from "axios";
import { useEffect, useState } from "react";

const WeatherDataComponent=({city}:any)=>{

    const [temp,setTemp]=useState("")
    const [feels_like,setFeels_like]=useState("")
    const [humidity,setHumidity]=useState("")

   async function readTemperature(){
         let response=  await  axios.get(
             "https://api.openweathermap.org/data/2.5/weather?q="+
                city+"&APPID=84537705ffe70fde1b945b4254dff0c7")
          let result=response.data.main
          setTemp(Math.round(Number(result.temp)-273)+" Centigrade")
          setHumidity(result.humidity)
          setFeels_like(Math.round(Number(result.feels_like)-273)+" Centigrade")
    }


    useEffect(()=>{
        readTemperature()
    },[city])

    return(
        <div className="card" 
        style={{padding: "20px",width: "300px",
        backgroundColor:"#F5CBA7",margin:"30px",
        color:"#212F3C"}}>
            <h1 className="title">{city}</h1>
            <ul>
                <li>Temperature - {temp}</li>
                <li>Feels Like -{feels_like}</li>
                <li>Humidty - {humidity}</li>
            </ul>
        </div>
    )

}

export default WeatherDataComponent;