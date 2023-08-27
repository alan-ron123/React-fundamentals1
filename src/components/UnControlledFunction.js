import React, { useRef } from "react";
import "./Form.css";

function UnControlledFunction() {
  let nameRef = useRef();
  let emailRef = useRef();
  let passRef = useRef();
  let cpassRef = useRef();
  let genderRef = useRef();
  let handledata = (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let gender = genderRef.current.value;
    let email = emailRef.current.value;
    let pass = passRef.current.value;
    let cpass = cpassRef.current.value;
    if (pass === cpass) {
      console.log(name, gender, email, pass);
    } else {
      alert("Please Check your password");
    }
  };

  return (
    <div>
      <form onSubmit={handledata}>
        <fieldset>
          <label htmlFor="username">User Name</label>
          <input type="text" placeholder="username" ref={nameRef} />
          <label htmlFor="emial">E-mail</label>
          <input type="text" placeholder="Enter email" ref={emailRef} />
          <label htmlFor="gender">Gender</label>
          <select name="gender" ref={genderRef}>
            <option value="default">Gender</option>
            <option value="male">Male</option>
            <option value="femle">Female</option>
          </select>
          <label htmlFor="pass">Password</label>
          <input type="password" placeholder="Enter password" ref={passRef} />
          <label htmlFor="cpass">Re Enter Password</label>
          <input
            type="password"
            placeholder="Re Enter password"
            ref={cpassRef}
          />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default UnControlledFunction;
