"use client"
import React, { useRef, useState } from "react";

function StopWatch() {
    const [time , setTime ] = useState(0)
    const intervalRef = useRef(null)

    const startTimer = () =>{
        if(intervalRef.current !== null) 
            return
        //@ts-ignore
        intervalRef.current = setInterval(()=>{
            setTime((prevTime)=>prevTime + 1)
        }, 1000)

    }

    const stopTimer = () =>{
        //@ts-ignore
        clearInterval(intervalRef.current);
        intervalRef.current = null
    }


    return (
        <div>
            <h1>Timer : {time}</h1>
            <button className="bg-gray-200  text-black rounded-2xl mr-2 p-2 px-4" onClick={startTimer}>Start</button>
            <button className="bg-gray-200 text-black rounded-2xl p-2 px-4" onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default StopWatch