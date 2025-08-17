import { useState } from 'react'

import './App.css'
import Side from './components/Side'
import Tst from './components/Tst'
import Qr from './components/Qr'
import Home from './pages/home'


function App() {


  return (
    <div className="bg-darkblue w-screen ">
     <div>
      <Home/>
     </div>
    
    <div className='md:flex gap-5 grid md:p-10 sm:p-5 p-3 shadow-xl shadow-faint md:shadow-none  mx-5 '>
        <Side/>
        <Tst/>
        <Qr/>
    </div>
      
    </div>
  )
}

export default App
