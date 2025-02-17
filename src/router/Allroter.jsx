import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Description from '../pages/Description'

const Allroter = () => {
 return(
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/product' element={<Product />}></Route>
    <Route path='/description' element={<Description />}></Route>    {/* <Route path='/login' element={<Login />}></Route> */}
 </Routes>
 )
  
}

export default Allroter
