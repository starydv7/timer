import React from 'react'
import { useEffect,useState } from 'react'

const Counter2 = () => {
    const [count, setCount] = useState(0);
    const handleInc = () => {
        setCount(count + 1);
    }
    const handleDec = () => {
        setCount(count - 1);
    }
    useEffect(() => {
       
    });
    
  return (
      <div>
          <h2>{count}</h2>
          <button onClick={handleInc}>Inc by 1</button>
          <button onClick={handleDec}>Dec by 1</button>
    </div>
  )
}

export default Counter2