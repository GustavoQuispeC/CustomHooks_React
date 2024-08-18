import { useCounter } from "../hooks/useCounter";
import PropTypes from "prop-types";
const CounterWithCustomHook = () => {
    const{counter,decrement,increment,reset} = useCounter();



  return (
    <>
      <div className="container border border-primary p-5 ">
        <div>Counter With Hook :{counter} </div>
        <hr />
        <button onClick={increment} className="btn btn-primary">+1</button>
        <button onClick={reset} className="btn btn-primary">Reset</button>
        <button onClick={decrement} className="btn btn-primary">-1</button>
      </div>
    </>
  );
};

export default CounterWithCustomHook;

CounterWithCustomHook.propTypes = {
    counter: PropTypes.number,
};