import { useState, useEffect } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h4>Usuario ya existe</h4>
      {JSON.stringify(coords)}
    </>
  );
};

export default Message;
