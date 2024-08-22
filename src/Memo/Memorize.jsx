import { useCounter } from "../hooks/useCounter";
import { useState } from "react";
import Small from "../useRef/Small";

const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true)
  return (
    <>
      <div className="container border border-primary p-5">
        <h1>
          Counter: <Small value={counter} />
        </h1>

        <hr />
        <button onClick={increment} className="btn btn-warning">
          +1
        </button>
        <button onClick={()=>setShow(!show)} className="btn btn-outline-primary ml-3">Show/Hide {JSON.stringify(show)}</button>
      </div>
    </>
  );
};

export default Memorize;
