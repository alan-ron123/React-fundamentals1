import { useContext } from "react";
import { userContext } from "./Context";
export default function Child2() {
  let data = useContext(userContext);
  return (
    <div>
      <h1>{data.count}</h1>{" "}
      <button
        onClick={() => {
          data.setcount(data.count + 1);
        }}
      >
        dec
      </button>
    </div>
  );
}
