import React, { createContext, useState } from "react";
export let userContext = createContext();
const Context = ({ children }) => {
  let [count, setcount] = useState(0);
  return (
    <userContext.Provider value={{ count, setcount }}>
      {children}
    </userContext.Provider>
  );
  // return <userContext.Provider value="siri">{children}</userContext.Provider>;
};
export default Context;
