import { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import Monitoring from './Pages/Monitoring'
import Overview from './Pages/Overview'
import OnBoarding from './Pages/OnBoarding'
import SourceOfIncome from './Pages/SourceOfIncome'
import Flagging from './Pages/Flagging'
import UAR from './Pages/UAR'
function App() {
useEffect(()=>{
  
})
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Monitoring/>}/> 
          <Route path='/overview' element={<Overview/>}/> 
          <Route path='/onboarding' element={<OnBoarding/>}/> 
          <Route path='/sourceofincome' element={<SourceOfIncome/>}/> 
          <Route path='/flagging' element={<Flagging/>}/> 
          <Route path='/uar' element={<UAR/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
