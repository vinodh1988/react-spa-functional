import { useState } from 'react';
import './App.css'
import Box from './Box';

const App=()=>{
  const [titles]=useState(['Vegetable','Fruits',"Gadgets","Groceries","Spices","Cosmetics"])
  return (
    <div>
      <h1>React World!!! Welcome</h1>
      <br/>
    <div className="alert alert-dark">
          <button className="btn btn-dark"> Dark Theme</button>&nbsp;&nbsp;
           <button className="btn btn-dark"> Light Theme</button>
    </div>
    <div className="container1" style={{overflow: "hidden"}}>
      {
        titles.map(x=><Box key={x} title={x}></Box>)
      }  
    </div>
    </div>
  )
}

export default App;