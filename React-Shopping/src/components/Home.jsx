import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='w-3/4  flex justify-between mt-12'>
            <p className='text-3xl font-extrabold font-serif text-red-500'>Welcome Brooo !</p>
            <button onClick={()=>navigate("/email")} className='border-2 border-black font-bold text-lg bg-black text-white px-7 py-2 rounded-xl hover:bg-white hover:text-black'>Login</button>
        </div>
      <div className='w- full mt-8 flex gap-12 p-12'>
            <img className='w-1/2 border-4 rounded-3xl border-violet-300' src={"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"} alt="img" />
            <p className='text-2xl mt-24 animate-color-cycle'>Welcome to Shopping Kart, a sleek, fast, and fully functional e-commerce web application built using React.js and powered by the FakeStoreAPI. Designed with a modern user interface and smart user experience, Shopping Kart simulates a real-world online shopping platform — where users can explore products, view detailed information, and manage their cart seamlessly.</p>

      </div>
    </div>
  )
}

export default Home
