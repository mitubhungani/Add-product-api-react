import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from './Admin/Add-product'
import Show from './Page/Show-product'
import Productp from './Page/Product-page'

const Allrouts = () => {
  return (
    <div>
        <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/show" element={<Show />} />
        <Route path='/product/:id' element={<Productp />} />
        </Routes>
    </div>
  )
}

export default Allrouts