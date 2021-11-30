const MessageBox=({message, changeMessage}:any)=>{
   return (
       <div className="card">
           <h4 className="title">Magic Message Box</h4>
           <p>
               {message}
           </p>
           <button className="btn btn-dark" onClick={changeMessage}>Change Message</button>
       </div>
   )
}

export default MessageBox;