import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = ({cart}) => {
    const [data, setData] = useState([]);
    const [count,setCount]=useState(1);
    const [add,setAdd]=cart;

    useEffect(() => {
        let url = `https://fakestoreapi.com/products`;
        axios.get(url)
            .then(res => {
                setData(res.data);  
            })
            .catch(e => {
                console.error("The error occurred", e);
            });
    }, []);

    const decr=()=>{
        count<=0?setCount(0): setCount(count-1);
    }

    const incr=()=>{
        setCount(count+1);
    }

    return (
        <div className='w-full flex items-center justify-center flex-col'>
            <h2 className='w-full text-3xl font-semibold pl-12 mt-12'>Products :</h2>
            {!data.length && <h1 className='w-full h-full flex text-center text-3xl mt-16 ml-40 text-red-500'>Loading...</h1>}
            <div className=' grid grid-cols-4 gap-4 p-5 '>
                {data.map((val) => (
                    <div key={val.id} className='w-full h-100px rounded-lg p-4 hover:scale-105 duration-400'>
                        <div className='hover:scale-105 duration-400'>
                         <img className='w-3/4 flex m-auto h-70 py-5  rounded-4xl' src={val.image} alt="img" />
                        </div>
                        <div className='w-[100%] px-3 py-2 bg-linear-to-b from-gray-400 to-white rounded-md'>
                            <h3 className='line-clamp-1 py-1 font-bold text-lg text-white'>{val.title}</h3>
                            <h3 className='line-clamp-3'>{val.description}</h3>
                            <h3 className='font-bold text-red-500 text-xl mt-5'>₹ {Number(((val.price)*85.8).toFixed(0)).toLocaleString('en-IN')}</h3>  
                            <div className='w-full flex  justify-center gap-12 mt-4 '>
                                <button className='px-4 ring-1 py-2 rounded-xl hover:text-blue-700' onClick={(e)=>(setCart(val.id))}>Add to Cart</button>
                                <button onClick={decr} className='px-4 ring-1 py-2 rounded-xl hover:text-blue-700'>Buy Now</button>
                            </div>
                            <div className='w-full mt-4 gap-3 justify-center flex m-auto'>
                                <button onClick={decr} className='border-2 px-4 text-xl font-extrabold rounded-sm text-red-600 hover:text-white hover:bg-red-600 '>-</button>
                                    <input type="text" value={count} className='w-2/12 text-center border-2 px-2 border-black rounded-xl '/>
                                <button onClick={incr} className='border-2 px-3 hover:bg-green-600 hover:text-white font-extrabold rounded-sm text-green-600'>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
