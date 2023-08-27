import React from "react";
import { useState } from "react";

const Shift = () => {
  let [item, setItem] = useState();
  let [first, setFirst] = useState([]);
  let [second, setSecond] = useState([]);
  // let [third, setThird] = useState([]);

  function onAdd() {
    setFirst((pre) => {
      return [...pre, item];
    });
    setItem("");
  }
  function onNext(i) {
    setSecond([...second, first[i]]);
    first.splice(i, 1);
    setFirst([...first]);
  }
  function onPrev(i) {
    setFirst([...first, second[i]]);
    second.splice(i, 1);
    setSecond([...second]);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={onAdd}>Add</button>
      <div className="d-flex">
        <div>
          <h3>first</h3>
          {first.map((a, i) => {
            return (
              <>
                <p>{a}</p>

                <button onClick={() => onNext(i)}>next</button>
              </>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Second</h3>
        {second.map((a, i) => {
          return (
            <>
              <p>{a}</p>
              <button onClick={() => onPrev(i)}>prev</button>
              <button>next</button>
            </>
          );
        })}
      </div>
      {/* <div>
        <h3>Third</h3>
        {third.map((a, i) => {
          return (
            <>
              <p>{a}</p>
              <button>prev</button>
              <button>next</button>
            </>
          );
        })}
      </div> */}
    </div>
  );
};

export default Shift;
