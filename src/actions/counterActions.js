import { ADD, ADD_5, RESET, SUBTRACT, SUBTRACT_5 } from "../types"

export const add = () => ({ type:ADD })
export const add5 = () => ({ type:ADD_5, payload: 5 })
export const subtract = () => ({ type:SUBTRACT})
export const subtract5 = () => ({type: SUBTRACT_5, payload:5 })
export const reset = () => ({type: RESET})


