import {combineReducers} from 'redux'
import { counterReducer } from './counterReducer'

const reducer = combineReducers( { counterReducer: counterReducer } )
export default reducer

