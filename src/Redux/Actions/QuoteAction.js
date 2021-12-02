import axios from "axios"

export const QuoteAction=(data)=>{
     return {
         type:"QUOTE_ACTION",
         data: data
     }
}

export const getQuoteFromAPI=()=>{
     return async (dispatch)=>{
        try{
           const response = await axios.get("https://api.quotable.io/random")
          
               dispatch(QuoteAction({quote:response.data.content,author:response.data.author}))
           }
           catch(e){
               dispatch(QuoteAction({content:"",author:""}))
           }
     }
}
