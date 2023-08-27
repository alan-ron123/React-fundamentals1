import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = { count: 0, name: "raju", products: [] };
  }
  static getDerivedStateFromProps(props, state) {
    return { name: props.name };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((a) => {
        return a.json();
      })
      .then((a) => this.setState({ products: a.products }));
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log(prevprops);
    console.log(prevstate);
    return null;
  }
  // timer;
  // componentWillUnmount() {
  //   alert("unmount");
  //   this.timer=setInterval(()=>{
  //     let date=new Date().toLocaleTimeString();
  //     this.setState({time:date})
  //     console.log(date)
  //   },1000)
  // }
  // componentWillUnmount(){
  //   clearInterval(this.timer)
  // }
  render() {
    return (
      <div className="d-flex flex-wrap">
        {this.state.products.map((a, i) => {
          return (
            <>
              <div className="card" style={{ width: "20rem", height: "400px" }}>
                <img
                  className="card-img-top"
                  src={a.thumbnail}
                  alt="Card image cap"
                  height={"200px"}
                />
                <div className="card-body">
                  <h5 className="card-title">{a.title}</h5>
                  <h5>Price: {a.price}</h5>
                  <p className="card-text">{a.description}</p>
                  <button href="#" className="btn btn-primary">
                    AddToCart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
