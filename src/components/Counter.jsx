import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCounter(count + 1)}> Increment by 1 </button>
      &nbsp;&nbsp;
      <button onClick={() => setCounter(count - 1)}> Decrement by 1 </button>
    </>
  );
};

export default Counter;
