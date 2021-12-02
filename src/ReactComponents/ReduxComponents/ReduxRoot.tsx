import MessageBoxHOC from "../../Redux/HOC/MessageBoxHOC";
import QuoteBoxHOC from "../../Redux/HOC/QuoteBoxHOC";

const ReduxRoot=()=>{
   return(
       <div className="reduxParent">
             <MessageBoxHOC></MessageBoxHOC>
             <QuoteBoxHOC></QuoteBoxHOC>
       </div>
   )
}

export default ReduxRoot;