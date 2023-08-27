import React, { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
const FetchReducer = () => {
  let state = {
    data: [],
  };
  let reducer = (state, action) => {
    switch (action.type) {
      case "CART":
        return { ...state, data: action.payload };
    }
  };
  let [data, dispatch] = useReducer(reducer, state);
  console.log(data);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        dispatch({ type: "CART", payload: res.data.products });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return <div></div>;
};

export default FetchReducer;
