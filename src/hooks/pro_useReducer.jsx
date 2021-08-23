import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { text1: "", text2: "" });
  const change = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <input name="text1" value={state.text1} onChange={change} />
      <input name="text2" value={state.text2} onChange={change} />
      <p>text1 : {state.text1}</p>
      <p>text2 : {state.text2}</p>
    </div>
  );
}
