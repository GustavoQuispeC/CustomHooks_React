import { useCounter } from "../hooks/useCounter";
import { useMemo, useState } from "react";
import Small from "../useRef/Small";

const heavyStuff =(iterationNumber = 100)=> {
  for(let i=0; i<iterationNumber; i++){
    console.log('Ahí vamos...');
  }
  return `${iterationNumber} iteraciones realizadas`;
}

const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <div className="container border border-primary p-5">
        <h1>
          Counter: <Small value={counter} />
        </h1>
        <h4>{memorizedValue}</h4>

        <hr />
        <button onClick={increment} className="btn btn-warning">
          +1
        </button>
        <button onClick={()=>setShow(!show)} className="btn btn-outline-primary ml-3">Show/Hide {JSON.stringify(show)}</button>
      </div>
    </>
  );
};

export default MemoHook;
