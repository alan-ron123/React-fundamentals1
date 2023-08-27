import React, { useState, useCallback } from "react";
import Child1 from "./Child1";

const Child = () => {
  let [name, setName] = useState("savitha");
  let [count, setCount] = useState(0);
  let changename = useCallback(() => {
    if (name == "savitha") {
      setName("geetha");
    } else {
      setName("savitha");
    }
  }, [name]);
  return (
    <div>
      <Child1 changename={changename} />
      <h1>{name}</h1>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
export default Child;
