import React, { memo } from "react";
const Child1 = ({ changename }) => {
  return (
    <div>
      {console.log("child1 component rendering")}
      <button onClick={() => changename()}>change</button>
    </div>
  );
};
export default memo(Child1);
