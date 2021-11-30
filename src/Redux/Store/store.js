import {combineReducers,createStore} from 'redux'
import {firstReducer,messageReducer} from '../Reducers/reducer'

const appState=combineReducers({
    currentRound: firstReducer,
    messageData: messageReducer
})

export const store=createStore(appState)