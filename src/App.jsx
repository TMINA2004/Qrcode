import { useState } from 'react'

import './App.css'
import Side from './components/Side'
import Tst from './components/Tst'
import Qr from './components/Qr'
import Home from './pages/home'


function App() {


  return (
    <div className="bg-darkblue w-full ">
     <div>
      <Home/>
     </div>
    <div>
      
    </div>
    <div className='md:flex gap-5 grid md:p-10 sm:p-5 p-3  shadow-lightgray md:shadow-none  sm:mx-5 mx-2 shadow-around rounded-lg md:rounded-none mt-4 md:mt-0  '>

        <Side/>
        <Tst/>
        <Qr/>
    </div>
      
    </div>
  )
}

export default App
