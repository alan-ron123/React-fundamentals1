let CounterReducer = (state, Action) => {
  console.log("ac", Action); //action is a object with type and payload properties
  switch (Action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export default CounterReducer;
