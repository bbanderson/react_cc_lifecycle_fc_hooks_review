import React, { useCallback, useMemo, useRef, useState } from "react";

const getAvg = (list) => {
  console.log("평균 계산");
  if (list.length === 0) return 0;
  const acc = list.reduce((pre, cur) => pre + cur);
  return acc / list.length;
};

export default function App() {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  const inputRef = useRef();

  const avg = useMemo(() => getAvg(list), [list]);

  const change = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const addToList = useCallback(
    (e) => {
      setList([...list, parseInt(number)]);
      setNumber(0);
      inputRef.current.focus();
    },
    [list, number]
  );
  return (
    <div>
      <input type="number" ref={inputRef} value={number} onChange={change} />
      <button onClick={addToList}>추가</button>
      <p>평균값 : {avg}</p>
      <ul>
        {list.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
