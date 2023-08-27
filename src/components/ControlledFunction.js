import React, { useState } from "react";
import "./Form.css";

const ControlledFunction = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [confirmpassword, setConfirmpassword] = useState();
  let initialState = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [user, setUser] = useState(initialState);

  let onchangehandler = ({ target }) => {
    //   console.log(name, value);
    //    let element=target
    //    let {name, value}=target;
    //    if(name === "name" || value.lenght<3){
    //     element.style.border="2px solid red"
    //    }
    setUser({ ...user, [target.name]: target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    //   if (password === confirmpassword) {
    //     console.log(name, email, password);
    //   }
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>SignUp</legend>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="name"
            value={user.name}
            onChange={(e) => onchangehandler(e)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={(e) => onchangehandler(e)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={(e) => onchangehandler(e)}
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-Enter your password"
            name="confirmpassword"
            value={user.confirmpassword}
            onChange={(e) => onchangehandler(e)}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default ControlledFunction;
