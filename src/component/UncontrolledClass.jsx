import React, { Component, createRef } from "react";
import "./Form.css";

class UncontrolledClass extends Component {
  constructor() {
    super();
    this.nameRef = createRef();
    this.genderRef = createRef();
    this.emailRef = createRef();
    this.passRef = createRef();
    this.cpassRef = createRef();
    this.yes = createRef();
    this.no = createRef();
  }
  handledata = (e) => {
    e.preventDefault();
    let name = this.nameRef.current.value;
    let gender = this.genderRef.current.value;
    let email = this.emailRef.current.value;
    let pass = this.passRef.current.value;
    let cpass = this.cpassRef.current.value;
    console.log(this.yesRef);
    if (pass == cpass) {
      console.log(name, gender, email, pass);
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handledata}>
          <fieldset>
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder="username" ref={this.nameRef} />
            <label htmlFor="emial">E-mail</label>
            <input type="text" placeholder="Enter email" ref={this.emailRef} />
            <label htmlFor="gender">Gender</label>
            <select name="gender" ref={this.genderRef}>
              <option value="default">Gender</option>
              <option value="male">Male</option>
              <option value="femle">Female</option>
            </select>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="New Password"
              ref={this.passRef}
            />
            <label htmlFor="cpass">Re Enter Password</label>
            <input
              type="password"
              placeholder="Re Enter password"
              autoComplete="Suggested New Password"
              ref={this.cpassRef}
            />
            <label htmlFor="">Save Password</label>
            <input type="radio" name="check" id="yes" ref={this.yesRef} />
            Yes
            <input type="radio" name="check" id="no" ref={this.noRef} />
            no
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UncontrolledClass;
