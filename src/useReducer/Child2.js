import { useReducer } from "react";
import CounterReducer from "./CounterReducer";

const Child2 = () => {
  let state = 0;
  let [data, dispatch] = useReducer(CounterReducer, state, init); //init function (optional)
  console.log(data, dispatch);
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </div>
  );
};
export default Child2;

// import React from "react";
// import Child2 from "./useReducer/Child2";

// const App = () => {
//   return (
//     <>
//       <Child2 />
//     </>
//   );
// };
// export default App;
