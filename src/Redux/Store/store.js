import {combineReducers,createStore,applyMiddleware} from 'redux'
import {firstReducer,messageReducer,quoteReducer} from '../Reducers/reducer'
import  thunk from 'redux-thunk'
import { getQuoteFromAPI } from '../Actions/QuoteAction'

const appState=combineReducers({
    currentRound: firstReducer,
    messageData: messageReducer,
    quoteData: quoteReducer
})

export const store=createStore(appState,applyMiddleware(thunk))

store.dispatch(getQuoteFromAPI())