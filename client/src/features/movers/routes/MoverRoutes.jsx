import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddMover from '../components/addMover'
// import AllMovers from '../pages/AllMovers'

const MoverRoutes =() =>


 
   (
  <Routes>
    <Route path="/add-mover" element={<AddMover/>} ></Route>
    {/* <Route path="/all-movers" element={<AllMovers/>} ></Route> */}

  </Routes>
  )
  export default MoverRoutes

