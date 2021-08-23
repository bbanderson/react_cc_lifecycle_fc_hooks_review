import React, { useCallback, useState } from "react";

const Person = React.memo(({ name, age }) => {
  return (
    <div>
      {name} / {age}
    </div>
  );
});

function App() {
  const [state, setState] = useState({
    text: "",
    persons: [
      { id: 1, name: "john", age: 20 },
      { id: 2, name: "sam", age: 21 }
    ]
  });

  const _change = useCallback((e) => {
    setState((state) => ({
      ...state,
      text: e.target.value
    }));
  }, []);

  const _click = useCallback(() => {}, []);

  const { text, persons } = state;
  return (
    <div>
      <input type="text" value={text} onChange={_change} />
      <ul>
        {persons.map((person) => (
          <Person {...person} key={person.id} onClick={_click} />
        ))}
      </ul>
    </div>
  );
}

export default App;
