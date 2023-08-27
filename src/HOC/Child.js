import Hoc from "./Hoc";
const Child = (props) => {
  console.log(props);
  return (
    <>
      <div>hi</div>
    </>
  );
};
export default Hoc(Child);
