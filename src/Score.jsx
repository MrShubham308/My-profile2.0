import React, { useState } from 'react'

function Score() {
    const [score, setScore] = useState(0);
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br frome-indigo-500 to-pink-500' >
        <div className="bg-white p-10 rounded-2xl font-bold text-gray-700 mb-2">

        Crecket Store


        <p className="text-gray-500 mb-6">
            State Example Using <span className="font-bold"></span>


        </p>
        <h1 className="text-7xl font-extrabold text-blue-600 mb-8 text-center "> {score}</h1>

        <button className='bg-blue-400 px-8 py-3 m-2 text-white text-lg font-semibold rounded-xl 
        hover:bg-blue-700 active:scale-95 transition-all
        duraction-200 shadow-[0_0_10px_rgba(0,0,0,1)]' 
        onClick={() =>{
            setScore(score +1);
        }}
        > increment</button>
        <button className='bg-red-400 px-8 py-3  text-white text-lg font-semibold rounded-xl 
        hover:bg-blue-700 active:scale-95 transition-all
        duraction-200 shadow-[0_0_10px_rgba(0,0,0,1)]' 
        onClick={() =>{
            setScore(0);
        }}
        >reset</button>

        <button
        className='bg-green-400 px-8 py-3 text-white text-lg font-semibold rounded-xl 
        hover:bg-blue-700 active:scale-95  transition-all
        duraction-200 shadow-[0_0_10px_rgba(0,0,0,1)]' 
          onClick={() =>{
            setScore(score> 0 ? score - 1 : 0 );
        }}


        >decrement</button>



        </div>


    </div>

  )
}

export default Score