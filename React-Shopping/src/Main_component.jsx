import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Products from './components/Products.jsx'
import Nav from './components/Nav.jsx'
import Email from './components/Email.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Cart from './components/Cart.jsx'


const Main_component = () => {
  
  const [cart,setCart]=useState();

  return (
    <div className="w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">

    <BrowserRouter >
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/email' element={ <Email/>}></Route>
          <Route path='/register' element={ <Register/>}></Route>
          <Route path='/pro' element={<Products/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Main_component
