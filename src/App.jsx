import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Add-product"
import Show from "./Show-product"


function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/add" element={<Add />} />
    <Route path="/show" element={<Show />} />
   </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
