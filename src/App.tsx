import { useState } from 'react';
import './App.css'
import Box from './Box';

const App=()=>{
  const [titles]=useState(['Vegetable','Fruits',"Gadgets","Groceries","Spices","Cosmetics"])
  return (
    <div>
      <h1>React World!!! Welcome</h1>
      <br/>
      {
        titles.map(x=><Box key={x} title={x}></Box>)
      }  
    </div>
  )
}

export default App;