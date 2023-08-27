import React from "react";
import { useState } from "react";
const ObjCrud = () => {
  let det = {
    id: new Date().getMilliseconds(),
    name: "",
    age: "",
  };
  let [store, SetStore] = useState([]);
  let [edit, setEdit] = useState();
  let [detail, setDetail] = useState(det);
  function handleChange({ target }) {
    setDetail({ ...detail, [target.name]: target.value });
  }
  function onAdd() {
    SetStore((pre) => {
      return [...pre, detail];
    });

    setDetail(det);
  }
  function onDelete(a) {
    let Delete = store.filter((fil) => fil.id !== a.id);
    SetStore([...Delete]);
  }
  function onEdit(a) {
    let find = store.find((f) => f.id === a.id);
    setDetail(find);
    setEdit(find.id);
  }
  function onUpdate() {
    let index = store.findIndex((ind) => ind.id === edit);
    store[index].name = detail.name;
    store[index].age = detail.age;
    SetStore([...store]);
  }
  return (
    <>
      <div>
        <input
          name="name"
          type="text"
          value={detail.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="age"
          type="number"
          value={detail.age}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={onAdd}>Add</button>
        <button onClick={onUpdate}>Update</button>
      </div>
      <div>
        {store.map((a, i) => {
          return (
            <ul key={a.id}>
              <li>{a.name}</li>
              <li>{a.age}</li>
              <button onClick={() => onDelete(a)}>delete</button>
              <button onClick={() => onEdit(a)}>edit</button>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default ObjCrud;
