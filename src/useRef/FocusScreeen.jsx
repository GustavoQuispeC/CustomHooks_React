import { useRef } from "react";
const FocusScreeen = () => {
  
    const inputRef = useRef();

  

const onClickSelect = () => {
    //document.querySelector('input').select();
    //console.log(inputRef);
    inputRef.current.select();
}

  return (
    <div className="container border border-primary p-5">
      <div>FocusScreeen</div>
      <hr />
      <input ref={inputRef} type="text" className="form-control" placeholder="Su nombre" />
      <button onClick={onClickSelect} className="btn btn-primary mt-3">Focus</button>
    </div>
  );
};

export default FocusScreeen;
