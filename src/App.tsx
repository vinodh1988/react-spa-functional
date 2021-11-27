import { useState } from 'react';
import './App.css'
import Box from './Box';
import StyleForm from './ReactComponents/StyleForm';

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
  return (
    <div>
      <h1>React World</h1>
      <br/>
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
    <div style={{overflow: "hidden" , margin:"20px"}}>
         <StyleForm></StyleForm>
      </div>
    </div>
  )
}

export default App;