import React, { useState } from 'react';

const handleColor = () => {
    setColor("");
}
const Color = () => {
  return (
      <div>
          <button onClick={handleColor}>Change Color</button>
    </div>
  )
}

export default Color