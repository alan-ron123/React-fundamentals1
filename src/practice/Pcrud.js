import React from "react";
import { useState } from "react";
const Pcrud = () => {
  let [name, setName] = useState("");
  let [store, setStore] = useState([]);
  let [show, setShow] = useState(true);
  let [eindex, setEindex] = useState();
  let onAdd = () => {
    if (name.length > 0) setStore([...store, name]);
    setName("");
  };
  let onDelete = (i) => {
    store.splice(i, 1);
    setStore([...store]);
  };
  let onEdit = (i) => {
    setName(store[i]);
    setShow(false);
    setEindex(i);
  };
  let onUpdate = () => {
    store.splice(eindex, 1, name);
    setStore([...store]);
    setShow(true);
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      {show ? (
        <button onClick={onAdd}>add</button>
      ) : (
        <button onClick={onUpdate}>update</button>
      )}
      {store.map((val, i) => {
        return (
          <div>
            <p>{val}</p>
            <button onClick={() => onDelete(i)}>delete</button>
            <button onClick={() => onEdit(i)}>edit</button>
          </div>
        );
      })}
    </>
  );
};
export default Pcrud;
