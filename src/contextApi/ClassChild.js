import React, { Component } from "react";
import { userContext } from "./Context";
export default class ClassChild extends Component {
  static contextType = userContext;
  render() {
    return <div>{this.context}</div>;
  }
}
// import React from "react";
// import Context from "./contextApi/Context.js";
// import ClassChild from "./contextApi/ClassChild.js";
// const App = () => {
//   return (
//     <Context>
//       <ClassChild />
//     </Context>
//   );
// };
// export default App;

//another method
// import React, { Component } from "react";
// import { userContext } from "./Context";
// export default class ClassChild extends Component {
//   render() {
//     return (
//       <userContext.Consumer>
//         {(value)=>{
//           return <div>
//             <h1>{value}</h1>
//           </div>
//         }}
//       </userContext.Consumer>
//     )
//   }
// }
