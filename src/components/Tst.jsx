import React,{useContext} from 'react'
import {MyContext} from '../UseCntx'



const Tst = () => {
     const { varr, setvar } = useContext(MyContext);

  return (
    <div className='md:w-1/2 md:shadow-around md:shadow-lightgray h-fit'>

          
         {
        varr=="URL" &&
         <div className="w-60 h-96 bg-darkblue shadow-lg"></div>
        }
        
         {
        varr=="Text" &&
         <div className="w-60 h-96 bg-yellow-300 shadow-lg"></div>
        }

         {
        varr=="Mail" &&
         <div className="w-60 h-96 bg-purple-300 shadow-lg"></div>
        }
      
        {
        varr=="wifi" &&
         <div className="w-60 h-96 bg-red-400 shadow-lg"></div>
        }
      
      
    </div>
  )
}

export default Tst