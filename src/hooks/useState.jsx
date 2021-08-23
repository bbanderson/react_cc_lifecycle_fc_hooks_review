import React, { useCallback, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => setCount(count + 1), [count]);
  const decrease = useCallback(() => setCount(count - 1), [count]);
  return (
    <div>
      <p>현재 값 : {count}</p>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
export default function App() {
  return <Counter />;
}
