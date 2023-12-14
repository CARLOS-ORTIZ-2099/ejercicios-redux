
/* este reducer recibe como parametro un estado y un objeto de acciones */

import { ADD, ADD_5, RESET, SUBTRACT, SUBTRACT_5 } from "../types"

const initialState = 0

export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD : {
            return state + 1
        }
        case SUBTRACT : {
            return state - 1
        }
        case ADD_5 : {
            return state + action.payload
        }
        case SUBTRACT_5 : {
            return state - action.payload
        }
        case RESET : {
            return initialState
        }
        default : {
            return state
        }
    }
}
