import React from 'react';
import AddBox from '../components/addBox';
import { Route, Routes } from 'react-router-dom';

const BoxRoutes = () => (
    
     (
    <>
    <Routes>
      <Route path="/add-box" element={<AddBox></AddBox>}></Route>
    </Routes>
    </>
  )
)
export default BoxRoutes

