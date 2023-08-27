import React, { useEffect, useState } from "react";
import axios from "axios";
import "../useEffect/crud.css";

function FetchDataAxios() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({});
  const [inputData, setInputData] = useState();
  const [remove, setRemove] = useState({});
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data);
    });
  }, []);
  const userDetails = (a) => {
    setNewData(a);
  };
  const userDelete = (a) => {
    let userDelete = data.filter((user) => {
      return user.id !== a.id;
    });
    setData(userDelete);
  };
  const userEdit = (a) => {
    setFlag(true);
    setRemove(a);
  };
  // console.log(remove)
  const changedata = () => {
    let modData = data.map((object) => {
      if (object.id === remove) {
        return { ...object, phone: inputData };
      }
      return object;
    });
    console.log(modData);
    setData(modData);
    setFlag(false);
  };
  return (
    <div id="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th colSpan={3}>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <button
                    onClick={() => {
                      userDetails(item);
                    }}
                  >
                    Details
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      userDelete(item);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      userEdit(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {newData && (
          <div>
            <h1>{newData.name}</h1>
            <h1>{newData.email}</h1>
            <h1>{newData.phone}</h1>
            <h1>{newData.name}</h1>
            <h1>{newData.name}</h1>
          </div>
        )}
      </div>
      {flag ? (
        <div>
          <input
            placeholder="enter the number"
            onChange={(e) => {
              setInputData(e.target.value);
            }}
          />
          <button onClick={changedata}>Submit</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FetchDataAxios;
