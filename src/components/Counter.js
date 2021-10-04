import React, { useReducer } from "react";

const initialState = 0
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch({action: "increment"})}>Increment</button>
      <button onClick={() => dispatch({action: "decrement"})}>Decrement</button>
      <button onClick={() => dispatch({action: "reset"})}>Reset</button>
    </div>
  );
}

export default Counter;
