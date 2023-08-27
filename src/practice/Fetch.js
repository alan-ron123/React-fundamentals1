import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  let [store, setStore] = useState([]);
  let [det, setDet] = useState({});
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setStore(res.data);
    });
    console.log(store);
  }, []);

  function onDet(a) {
    setDet(a);
  }
  function onDel(a) {
    setStore(store.filter((i) => i.id !== a.id));
    setDet("");
  }
  return (
    <div className="App">
      <table>
        <tbody>
          {store.map((a) => {
            console.log(a);
            return (
              <tr>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.phone}</td>
                <td>{a.email}</td>
                <td>
                  <button onClick={() => onDet(a)}>details</button>
                </td>
                <td>
                  <button onClick={() => onDel(a)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <tr>
        <td>{det.id}</td>
        <td>{det.name}</td>
        <td>{det.phone}</td>
        <td>{det.email}</td>
      </tr>
    </div>
  );
}
