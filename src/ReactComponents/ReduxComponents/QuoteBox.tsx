const QuoteBox=({author,quote,getNewQuote}:any)=>{
   return(
       <div className="Card" style={{width: "400px",padding:"20px",margin:"30px"}}>
              <h3>Quote for the day</h3>
              <p>
                 {quote} - {author}
              </p>
              <button 
              style={{width:"150px"}} 
              className="btn btn-danger"
              onClick={getNewQuote}>New Quote</button>
       </div>
   )
}

export default QuoteBox