
import React from 'react'
import App from "./App";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './sections/Form/Register';
import Navbar from './components/Navbar';

const Routers = () => {
  return (<>
    <Navbar/>
     <Routes>
        <Route path='/'  element={<Register/>}/>
        <Route path='/app' element={<App/>} />
         </Routes>
         </>
    
  )
}

export default Routers



