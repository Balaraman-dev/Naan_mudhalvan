import React from 'react'
import { useNavigate } from 'react-router-dom'

const Email = () => {
  const navigate=useNavigate();
  return (
    <div className='w-[100vw] h-[75vh] flex items-center justify-center '>
        <div className='w-1/4 h-1/2 rounded-lg flex items-center justify-center flex-col gap-8 bg-black'>
            <input className='w-3/4 border-2 border-blue-900 p-2 rounded-md text-white ' placeholder='Enter Your Email' type="email" name="email" id="" />
            <button className='w-1/2 rounded-xl py-2 bg-blue-900 text-white text-lg font-bold hover:bg-yellow-600 duration-300 hover:text-black' onClick={()=>navigate("/register")}>Next</button>
        </div>
    </div>
  )
}

export default Email
