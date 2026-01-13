"use client"
import React, { useState } from 'react'

export const Conditional = () => {
    const [isVisible , setVisible] = useState(false)
  return (
   <>
    <div>Conditional</div>
    <button
    onClick={()=>{setVisible(!isVisible)}}
     className='bg-gray-100 text-black hover:bg-gray-200 rounded-lg'>
        Toggle 
    </button>
    {isVisible && <p>I am practicing for interview tommorow</p> }
   </>
  )
}
