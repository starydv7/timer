import React from 'react'
import { useState } from 'react'

const Counter2 = () => {
    const [count, setCount] = useState(0);
    const handleInc = () => {
        setCount(count + 1);
    }
  return (
      <div>
          <h2>Count</h2>
          <button onClick={handleInc}>Inc by 1</button>
    </div>
  )
}

export default Counter2