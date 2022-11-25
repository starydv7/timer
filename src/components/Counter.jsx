import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState([
    { service: "wordPress", price: 600 },
    { service: "html", price: 7600 },
    { service: "react", price: 5600 },
    { service: "js", price: 6004 },
    { service: "redux", price: 1600 },
  ]);
  let totalPrice = 0;
  data.forEach((item) => {
    totalPrice+= item.price;
  });
  console.log("Total:", totalPrice);
  return (
    <>
      {totalPrice};
      <h2>{count}</h2>
      <button onClick={() => setCounter(count + 1)}> Increment by 1 </button>
      &nbsp;&nbsp;
      <button onClick={() => setCounter(count - 1)}> Decrement by 1 </button>
    </>
  );
};
export default Counter;
