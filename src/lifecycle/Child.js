// import react, { Component } from "react";
// export default class Child extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       name: "raju",
//       products: [],
//     };
//   }
//   //   static getDerivedStateFromProps(props, state) {
//   //     console.log(props, state);
//   //     return { name: props.name };
//   //   }

//   componentDidMount() {
//     fetch("https://dummyjson.com/products")
//       .then((a) => {
//         return a.json();
//       })
//       .then((a) => this.setState({ products: a.products }));
//   }
//   render() {
//     return (
//       <div>
//         console.log
//         {this.state.products.map((a,i)=>
//         return(
//         {
//             <div class="card" style={{width: "18rem"}}>
//             <img class="card-img-top" src="..." alt="Card image cap"/>
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//         })}
//       </div>
//     );
//   }
// }
