import { useState } from 'react';
import './App.css'
import Box from './Box';
import MessageBox from './ReactComponents/ReduxComponents/MessageBox';
import ReduxRoot from './ReactComponents/ReduxComponents/ReduxRoot';
import StyleForm from './ReactComponents/StyleForm';
import WeatherDataComponent from './ReactComponents/WeatherData';
import {Provider} from 'react-redux';
import {store} from './Redux/Store/store'

const App=()=>{
  
  function changeTheme(theme:string):void{
     setTheme(theme);
     setButton1(theme=="container1"?"btn btn-danger":"btn btn-light")
     setButton2(theme=="container2"?"btn btn-danger":"btn btn-light")
  }

  const [titles]=useState(['Vegetable','Fruits',"Gadgets","Groceries","Spices","Cosmetics"])
  const [button1,setButton1]=useState("btn btn-danger")
  const [button2,setButton2]=useState("btn btn-ligh")
  const [theme,setTheme]=useState("container1")
  const [city,setCity]=useState("Chennai")
  return (
    <div>
      <h1>React World</h1>
      <br/>
      <div className="redux-layer">
          <h1>Redux Layer</h1>
          <Provider store={store}>
                 <ReduxRoot></ReduxRoot>
          </Provider>
      </div>
    <div className="alert alert-dark">
          <button className={button1} 
          onClick={()=>{changeTheme("container1")}}> 
          Dark Theme
          </button>&nbsp;&nbsp;
           <button className={button2}
           onClick={()=>{changeTheme("container2")}}
           > Light Theme</button>
    </div>
    <div className={theme} style={{overflow: "hidden"}}>
      {
        titles.map(x=><Box key={x} title={x}></Box>)
      }  
      
    
    </div>
    <div style={{overflow: "hidden" , padding:"20px" ,margin:"20px", backgroundColor: "#5D6D7E"}}>
         <StyleForm></StyleForm>
      <div style={{padding: "30px" ,overflow: "hidden" ,color: "white"}}>
         Select City :: 
         <select onChange={(e)=>setCity(e.target.value)}>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
              <option>Bengaluru</option>
         </select>
         <WeatherDataComponent city={city}></WeatherDataComponent>
      </div>
    </div>
    </div>
  )
}

export default App;