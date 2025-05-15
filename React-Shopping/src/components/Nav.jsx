import React from 'react'
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navigate=useNavigate();

  return (
    <div className='w-full  flex items-center justify-center'>
      <div className='w-11/12 flex justify-between h-16 mt-8 items-center rounded-full bg-slate-500 text-white '>
          <h2 className='font-bold text-3xl pl-20 text-blue-'>Vaanga Nanbare!</h2>
          <div className='flex gap-15 pr-20'>
              <h3 className='font-semibold text-xl cursor-pointer hover:scale-110 duration-300' onClick={()=>navigate("/")}>Home</h3>
              <h3 className='font-semibold text-xl cursor-pointer hover:scale-110 duration-300' onClick={()=>navigate("/cart")}>Cart</h3>
              <h3 className='font-semibold text-xl cursor-pointer hover:scale-110 duration-300' onClick={()=>navigate("/profile")}>Profile</h3>
              <h3 className='font-semibold text-xl cursor-pointer hover:scale-110 duration-300' onClick={()=>navigate("/pro")}>Products</h3>
          </div>
      </div>
    </div>
  )
}

export default Nav
