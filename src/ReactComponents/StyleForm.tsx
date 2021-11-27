import { useState,useRef } from "react"

const StyleForm=()=>{
    const [bgColor,setBgColor]=useState("#34495E")
    const [color,setColor]=useState("#F0F3F4")

    const bgData:any=useRef<HTMLInputElement>()
    const colorData:any=useRef<HTMLInputElement>()

    function handleChange(refType:string){
       if(refType==="bg")
          setBgColor(bgData.current.value)
       else if(refType=="color")
          setColor(colorData.current.value)
    }

    return(
        <div className="card"
         style={{backgroundColor:bgColor,color: color, width:"600px",padding:"20px"}}>

            <table>
                  <tr>
                       <th>Background Color</th>
                       <td><input type="color" 
                       ref={bgData}
                       onChange={()=>{handleChange('bg')}}
                       /></td>
                  </tr>
                  <tr>
                       <th>Color</th>
                       <td><input
                        type="color" 
                        ref={colorData}
                        onChange={()=>{handleChange('color')}}
                        /></td>
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