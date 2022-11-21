import React from 'react';
import { useState,useEffect } from 'react';

const Timer = () => {
    const [state, setState] = useState(false);
    const [timer, setTimer] = useState(0);
    const handleStart = () => {
        setState(true);
    }
    const handleReset = () => {
        setState(false)
        setTimer(0);
    }
    const handleStop = () => {
        setState(false);
    }
    useEffect(()=>{
        if(state===true){
            let val= setInterval(()=>{
                setTimer(()=>timer+1)
            },1000)
return ()=>clearInterval(val)
        }
    })
  return (
      <div>
          <p>{timer}</p>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Timer;
// import React ,{useState,useEffect} from "react";

// const Timer =()=>{
//     const [state,setState] = useState(false)
//     const [count,setCount] = useState(0);

//     const handleStart =()=>{
//         setState(true)
//     }
//     const handleStop =()=>{
//         setState(false)
//     }

//     const handleResset =()=>{
//         setCount(0)
//         setState(false)
//     }

//     useEffect(()=>{
//         if(state===true){
//             let val= setInterval(()=>{
//                 setCount(()=>count+1)
//             },1000)
// return ()=>clearInterval(val)
//         }
//     })
//     return <div>
//         <p>{count}</p>
//         <button onClick={handleStart}>start</button>
//         <button onClick={handleStop}>stop</button>
//         <button onClick={handleResset}>reset</button>
//     </div>
// }
// export default Timer