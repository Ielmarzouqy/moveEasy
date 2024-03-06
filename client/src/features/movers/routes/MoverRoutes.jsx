import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddMover from '../components/addMover'

const MoverRoutes =() =>


 
   (
  <Routes>
    <Route path="/add-mover" element={<AddMover/>} ></Route>
  </Routes>
  )
  export default MoverRoutes

