
export const firstReducer=(state={run:0})=>{
    return {
         run: state.run+1
    }
}

export const messageReducer=(state={message:"Hello Redux!!!"},action)=>{
    switch(action.type){
         case "MESSAGE_ACTION":
             return {message: action.data}
         
         default:
             return state 
    }
}

/**
 * Reducer- it is a function which return object
 *          It runs very first time regardless of any action and
 *         
 *        -- Every time an action runs and returns a value,
 *          all the reducers would run
 *          and Reducers can also grab the value returned 
 *          by the last action in the
 *          second parameter
 * 
 *  Action - 
 *           Action is a function which upon execution will return an 
 *         Object 
 *            
 *            Conventionally an action would have two properties
 *             1. type
 *             2. data
 * 
 *
 * */