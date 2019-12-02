import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [items, setItems] = useState([]);
  function addItem() {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ]);
  }

  return (
    <div className="App">
      <button onClick={addItem}>Add a number </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
