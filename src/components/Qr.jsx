import React,{useState} from 'react'
import qrimage from '../assets/Group.png'
import { Download,RefreshCcw} from "lucide-react";

const Qr = () => {
   const [value, setValue] = useState(200); // starting value (px)

  // Convert slider value into resolution text
  const getResolution = (val) => {
    return `${val}x${val}px`;
  };
  return (
    <div className='flex justify-center items-center   rounded-lg  md:shadow-around md:rounded-md md:shadow-lightgray md:w-1/4  mb-5 p-6'>
      <div  >
        <div className='text-white md:text-2xl text-lg flex justify-center my-2' >Preview QR Code</div>
        <div className='flex items-center justify-center'>
           <img className='bg-white p-6 rounded-xl' src={qrimage} />
        </div>
           
        <div className=' flex items-center justify-center text-xl text-white mt-10 '>
       <strong>
        Resolution
        </strong> 
      </div>
      <div className=''>
        <input
          type="range"
          min="100"
          max="1000"
          step="100"
         
          className="flex-1 accent-lightblue cursor-pointer w-full "
        />
        <div className=' text-white mt-3'>
          <div className='flex justify-center items-center gap-4 place-content-around '>
             <div>low </div>
          <div><p className="text-white ">{getResolution(value)}</p></div>

          <div className=''>high</div>

          </div>
         

          
        </div>
        <div className='flex justify-center items-center'>
           <div className='flex gap-6 mt-5 '>

           <button className='bg-faint px-2 py-1 rounded-xl text-white hover:text-lightblue hover:border hover:border-lightblue'>PNG</button>     <button className='bg-faint px-2 py-1 rounded-xl text-white hover:text-lightblue hover:border hover:border-lightblue'>JPEG</button>     <button className='bg-faint px-2 py-1 rounded-xl text-white hover:text-lightblue hover:border hover:border-lightblue'>SVG</button>
        </div>

        </div>
       
        <div className='flex gap-2 mt-4'>
          <button className='flex gap-1 bg-faint p-1 rounded-xl text-white hover:bg-lightblue hover:border hover:border-lightblue'> <Download/>  Dwnload QR </button>
          <button className=' flex bg-faint p-1 rounded-xl text-white hover:bg-lightblue hover:border hover:border-lightblue'><RefreshCcw/> Regenerate</button>
        </div>

      </div>
        

      
      </div>
      








    </div>
  )
}

export default Qr