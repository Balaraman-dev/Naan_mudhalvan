import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Fetch from './Fetch.jsx'

const Main_component = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/pro' element={<Fetch/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Main_component
