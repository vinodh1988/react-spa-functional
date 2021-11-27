const WeatherDataComponent=({city}:any)=>{

    return(
        <div className="card" 
        style={{padding: "20px",width: "300px",
        backgroundColor:"#F5CBA7",margin:"30px",
        color:"#212F3C"}}>
            <h1 className="title">{city}</h1>
            <ul>
                <li>Temperature - Would be filled</li>
                <li>Feels Like - Would be Filled</li>
                <li>Humidty - Would be filled</li>
            </ul>
        </div>
    )

}

export default WeatherDataComponent;