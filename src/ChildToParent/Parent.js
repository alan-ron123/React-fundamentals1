import Child from "./Child";
import { useState } from "react";
export default function Parent() {
  let arr = [1, 2];
  let [arrr, setArrr] = useState(arr);

  function getName(get) {
    setArrr((pre) => [...pre, get]);
    console.log(get);
  }
  console.log(arrr);
  return (
    <div className="App">
      <Child name={getName} />
      <div>
        {arrr.map((a, i) => {
          return <li>{a}</li>;
        })}
      </div>
    </div>
  );
}
