import { useDispatch, useSelector } from "react-redux"
import { add, add5, reset, subtract, subtract5 } from "../actions/counterActions"


export const View = () => {

const dispatch = useDispatch()
const selector = useSelector(state => state.counterReducer)
console.log(selector)
/*  react-redux nos ofrece un hook para acceder al estado,
    y otro para mandar las acciones al reducer
*/


  return (
    <div>
        <button onClick={ () => dispatch(add()) }>+1</button>
        <button onClick={ () => dispatch(add5())}>+5</button>
        <button onClick={ () => dispatch(reset())}>0</button>
        <button onClick={ () => dispatch(subtract5())}>-5</button>
        <button onClick={ () => dispatch(subtract())}>-1</button> 
        <br/>
        <strong>{selector}</strong>
    </div>
  )


}
