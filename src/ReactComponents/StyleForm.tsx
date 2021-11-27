import { useState } from "react"

const StyleForm=()=>{
    const [bgColor,setBgColor]=useState("#34495E")
    const [color,setColor]=useState("#F0F3F4")
    return(
        <div className="card"
         style={{backgroundColor:bgColor,color: color, width:"600px",padding:"20px"}}>

            <table>
                  <tr>
                       <th>Background Color</th>
                       <td><input type="color"/></td>
                  </tr>
                  <tr>
                       <th>Color</th>
                       <td><input type="color"/></td>
                  </tr>
            </table>
            <h1>Wonderful React!!!</h1>
            <p>
                  This particular component demonstrates how to deal with 
                  Forms using Ref...<br/>
                  This is called uncontrolled component
           </p>
        </div>
    )
}

export default StyleForm;