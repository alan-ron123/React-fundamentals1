import React, { useState, useEffect } from "react";

const Dummy = () => {
  let [store, setStore] = useState([]);
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    // let dataFetch = async () => {
    //   let response = await fetch("https://dummyjson.com/products");
    //   console.log(response.json());
    // };
    // dataFetch();
    fetch("https://dummyjson.com/products")
      .then((a) => a.json())
      .then((res) => setStore(res.products));
  }, [toggle]);
  console.log(store);
  function onAdd() {
    setToggle(!toggle);
  }
  return (
    <div>
      <button onClick={onAdd}>click</button>
      {toggle ? (
        <div>
          {store.map((a, i) => {
            return (
              <>
                <li>{a.title}</li>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dummy;
