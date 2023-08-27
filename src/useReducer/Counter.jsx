import React, { useReducer } from "react";
function reducer(state, action) {
  console.log("action", action);
  switch (action.type) {
    case "INC":
      return { ...state, inc: state.inc + 1 };
      break;
    case "DEC":
      return { ...state, dec: state.dec - 1 };
      break;

    default:
      break;
  }
}

export default function Counter() {
  console.log("re-render");
  let intialState = {
    inc: 1,
    dec: 1,
    total: 2,
  };
  let [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>inc:{state.inc}</h1>
      <h1>dec:{state.dec}</h1>
      <h1>total:{state.total}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        -
      </button>
    </div>
  );
}
