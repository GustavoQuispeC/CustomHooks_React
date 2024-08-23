import {useCallback, useState } from "react";
import ShowIncrement from "../Memo/ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    () => {
      setCounter((value) => value + 1);
    },
    [ ],
  )
  

//   const increment = () => {
//     setCounter(counter + 1);
//   }

  return (
    <div className="container border border-primary p-5">
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement 
        increment={increment}
      />
    </div>
  );
  

};

export default CallbackHook;
