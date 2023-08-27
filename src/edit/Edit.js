import React, { useState } from "react";

const Edit = () => {
  let [text, setText] = useState();
  let [arr, setArr] = useState([]);
  let [edit, setEdit] = useState("");

  function textHandler(e) {
    setText(e.target.value);
  }
  function submitHandler() {
    if (edit) {
      setArr((pre) => {
        return pre.map((data) => {
          if ((data.id = edit)) {
            data.msg = text;
          }
          return data;
        });
      });
      setEdit("");
    } else {
      let obj = {
        id: new Date().getMilliseconds(),
        msg: text,
      };
      console.log(obj.id);
      setArr((pre) => {
        return [...pre, obj];
      });
    }
    setText("");
  }

  function editHandler(id) {
    let x = arr.find((data) => {
      return data.id === id;
    });
    setEdit(x.id);
    setText(x.msg);
  }
  return (
    <div className="container">
      <div>
        <input type="text" value={text} onChange={textHandler} />
        <button onClick={submitHandler}>
          {edit ? <span>e</span> : <span>a</span>}
        </button>
      </div>

      {arr.map((data) => {
        return (
          <>
            <p>{data.msg}</p>
            <button onClick={() => editHandler(data.id)}>edit</button>
          </>
        );
      })}
    </div>
  );
};

export default Edit;
