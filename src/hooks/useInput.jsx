import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function useInput(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const change = (e) => {
    dispatch(e.target);
  };
  return [state, change];
}

export default function App() {
  const [state, change] = useInput({
    email: "",
    password: ""
  });
  const { email, password } = state;
  return (
    <div>
      <input type="email" name="email" value={email} onChange={change} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={change}
      />
      <p>이메일 : {email}</p>
      <p>비밀번호 : {password}</p>
    </div>
  );
}
