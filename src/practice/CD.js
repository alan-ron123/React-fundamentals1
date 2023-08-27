import React, { useState } from "react";

function CD() {
  let [name, setName] = useState("");
  let [store, setStore] = useState([]);
  function onAdd() {
    setStore((a) => {
      return [...a, name];
    });
    setName("");
  }

  function deleteItem(id) {
    setStore((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
      {store.map((a, i) => {
        return (
          <div>
            <p>{a}</p>
            <button onClick={() => deleteItem(i)}>del</button>
          </div>
        );
      })}
    </div>
  );
}

export default CD;
