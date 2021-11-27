import { useState,useRef } from "react"

const StyleForm=()=>{
    const [bgColor,setBgColor]=useState("#34495E")
    const [color,setColor]=useState("#F0F3F4")
    const [title,setTitle]=useState("Wonderful React")
    const [description,setDescription]=useState("Way to go .....")

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
            <h1>{title}</h1>
            <p>
                {description}
           </p>
           <table>
                <tr>
                       <th>Title</th>
                       <td>
                           <input type="text" 
                           value={title}
                           onChange={(e)=>{setTitle(e.target.value)}}
                           ></input>
                           </td>
                  </tr>
                  <tr>
                       <th>Description</th>
                       <td>
                           <textarea rows={5} cols={50}
                           value={description}
                           onChange={(e)=>{setDescription(e.target.value)}}
                           ></textarea>
                       </td>
                  </tr>

           </table>
        </div>
    )
}

export default StyleForm;