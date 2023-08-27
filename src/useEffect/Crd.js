import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./crd.css";

const Crd = () => {
  let [users, setusers] = useState([]);
  let [user, setuser] = useState({});

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      setusers(res.data)
    );
  }, []);

  let userdetails = (a) => {
    setuser(a);
  };

  let deleteuser = (a) => {
    setusers(users.filter((e) => e.id !== a.id));
  };

  return (
    <div id="table-container">
      {console.log(users)}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((a) => {
            // console.log(a);
            return (
              <tr>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.email}</td>
                <td>{a.phone}</td>
                <td>
                  <button onClick={() => userdetails(a)}>Details</button>
                </td>
                <td>
                  <button onClick={() => deleteuser(a)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {user && (
          <>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Crd;
