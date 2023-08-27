const Hoc = (WrappedComponent) => {
  let obj = {
    name: "alan",
  };

  function inner() {
    return <WrappedComponent obj={obj} />;
  }
  return inner;
};
export default Hoc;
