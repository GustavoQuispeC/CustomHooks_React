import { useState } from "react";

const CounterApp = () => {
  // const [{ counter1, counter2, counter3 }, setCounter] = useState({
  //   counter1: 10,
  //   counter2: 20,
  //   counter3: 30,
  // });

  // const handleClick = () => {
  //   setCounter((prevState) => {
  //     return {
  //       ...prevState,
  //       counter1: prevState.counter1 + 1,
  //     };
  //   });
  // }

  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;
  return (
    <>
    <div className="container border border-primary p-5 ">
      <div>Counter1: {counter1}</div>
      <div>Counter2: {counter2}</div>
      <div>Counter3: {counter3}</div>

      <hr />

      <button
        className="btn btn-warning"
        onClick={() => {
          setCounter({
            ...state,
            counter1: counter1 + 1,
          });
        }}
      >
        +1
      </button>
      </div>
    </>
  );
};

export default CounterApp;
