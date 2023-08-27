import React, { useContext } from "react";
import { userContext } from "./Context";
const Child = () => {
  let data = useContext(userContext);
  console.log(data);
  return (
    <div>
      <h1>{data.count}</h1>
      <button
        onClick={() => {
          data.setcount(data.count + 1);
        }}
      >
        inc
      </button>
      {/* <h1>{data}</h1> */}
    </div>
  );
};
export default Child;

// import React from "react";
// import Context from "./contextApi/Context.js";
// import Child from "./contextApi/Child.js";
// import Child2 from "./contextApi/Child2.js";
// const App = () => {
//   return (
//     <Context>
//       <Child />
//       <Child2 />
//     </Context>
//   );
// };
// export default App;
