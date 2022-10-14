import { useReducer } from "react"

const initialState = {
  counter: 0
}

type ActionType = { type: 'increment' } | 
  { type: 'decrement' } | 
  { type: 'custom', payload: number } |
  { type: 'reset' }

const counterReducer = (state:typeof initialState, action:ActionType) => {
  switch (action.type) {
    case 'increment':
      return { 
        ...state,
        counter: state.counter + 1 
      }
    case 'decrement':
      return { 
        ...state,
        counter: state.counter - 1
      }
    case 'custom':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const ReducerCounter = () => {
  const [{counter}, dispatch] = useReducer(counterReducer, initialState)
  return (
    <>
      <h2>Counter: {counter}</h2>
      <br />
      <button 
        className="btn btn-outline-danger mt-2"
        onClick={ (e)=>dispatch({type: 'decrement'}) }
      > -1 </button>
      <button 
        className="btn btn-outline-success mt-2"
        onClick={ (e)=>dispatch({type: 'increment'}) }
      > +1 </button>
      <button 
        className="btn btn-outline-success mt-2"
        onClick={ (e)=>dispatch({type: 'custom', payload:100}) }
      > +100 </button>
      <button 
        className="btn btn-outline-secondary mt-2"
        onClick={ (e)=> dispatch({type: 'reset'}) }
      > Reset </button>
    </>
  )
}

export default ReducerCounter