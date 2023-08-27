import React from "react";

let Child = ({ name }) => {
  return (
    <div>
      {console.log("child component Reerendering")}
      <h1>hi hallo</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default Child;

// import React, { useState, useMemo } from "react";
// import Child from "./useMemo/Child";

// const App = () => {
//   let [name, setname] = useState("siri");
//   let [count, setcount] = useState(0);
//   let Child1 = useMemo(() => <Child name={name} />, [name]);

//   return (
//     <>
//       {/* <Child name={name}></Child> */}
//       {Child1}
//       <h1>{count}</h1>
//       <button onClick={() => setcount(count + 1)}>Increment</button>
//     </>
//   );
// };
// export default App;
