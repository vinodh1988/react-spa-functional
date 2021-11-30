const MessageBox=({message}:any)=>{
   return (
       <div className="card">
           <h4 className="title">Magic Message Box</h4>
           <p>
               {message}
           </p>
       </div>
   )
}

export default MessageBox;