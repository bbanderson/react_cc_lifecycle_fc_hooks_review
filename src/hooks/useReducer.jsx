import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { value: state.value + 1 };
    case "DECREASE":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>{state.value}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
    </div>
  );
}
