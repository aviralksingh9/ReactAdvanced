import React, { useReducer } from "react";

const CounterReducer = () => {
  const initialState = {count:0}
  const reducerFunction = (state, action)=>{
    switch(action.type){
      case 'increment': return {count:state.count+1};
      case 'decrement': return {count:state.count-1};
      case 'reset': return {count:0};
      case 'default': return state
    }
  }
  const [state, dispatch] = useReducer(reducerFunction, initialState)
  return (
    <>
      <h1>Counter with Reducer</h1>
      <h2>Counter: {state.count}</h2>
      <div>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
    </>
  );
};

export default CounterReducer;
