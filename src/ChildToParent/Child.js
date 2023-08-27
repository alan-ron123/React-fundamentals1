import { useEffect } from "react";
export default function Child(props) {
  let b = 15;
  useEffect(() => {
    props.name(b);
  }, []);

  return <div className="App"></div>;
}
