import { createStore, applyMiddleware, combineReducers } from "redux"
import {reducer} from "./reducer"
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    todoLists: reducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store