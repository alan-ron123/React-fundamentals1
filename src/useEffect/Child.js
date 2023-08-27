const { useEffect, useState } = require("react");

const Child = () => {
  let [count, setcount] = useState(0);
  let [name, setname] = useState("savitha");
  useEffect(() => {
    console.log("useEffect function is running");
    return () => {
      alert("useEffect function is closing");
    };
  }, [count]);
  let change = () => {
    if (name === "savitha") {
      setname("siri");
    } else {
      setname("savitha");
    }
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setcount(count + 1)}>+</button>
      <p>{name}</p>
      <button onClick={() => change()}>change</button>
    </div>
  );
};
export default Child;

//app.js
// import React from "react";
// import Child from "./useEffect/Child";
// import { useState } from "react";
// import UnControlledClass from "./components/UnControlledClass";

// const App = () => {
//   let [toggle, settoggle] = useState(false);
//   return (
//     <React.Fragment>
//       {/* <UnControlledClass /> */}
//       {toggle ? <Child /> : <h1>removed</h1>}
//       <button onClick={() => settoggle(!toggle)}>remove</button>
//     </React.Fragment>
//   );
// };
// export default App;
