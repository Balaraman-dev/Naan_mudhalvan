import React from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
   const navigate=useNavigate();
  return (
    <div className='w-[100vw] h-[75vh] flex items-center justify-center '>
        <div className='w-1/4 h-4/5 rounded-lg flex items-center justify-center flex-col gap-8  py-40 bg-black'>
            <input type="text" className='w-3/4 border-2 border-blue-900 p-2  text-white rounded-md hover:border-amber-400' placeholder='username'/>
            <input type="text" className='w-3/4 hover:border-amber-400 border-2 text-white border-blue-900 p-2 rounded-md ' placeholder='phone Number'/>
            <input type="text" className='w-3/4 border-2 hover:border-amber-400 text-white border-blue-900 p-2 rounded-md ' placeholder='Address'/>
            <input type="text" className='w-3/4 border-2 hover:border-amber-400 text-white border-blue-900 p-2 rounded-md ' placeholder='Landmark'/>
            <button className='w-1/2 rounded-xl py-2 bg-blue-900 text-white text-lg font-bold hover:bg-yellow-600 duration-300 hover:text-black' onClick={()=>navigate("/")}>Register Now</button>
        </div>    
    </div>
  )
}

export default Register
