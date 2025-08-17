
import React, { useState } from 'react'
import { ChevronDown } from "lucide-react"; // flèche vers le bas

const   Home = () => {
    const [trans,settrans]=useState("EN")
    const [show,setshow]=useState(false)
    const tooglelaung=()=>{
        settrans(trans=="FR"?"EN":"FR")
         settrans2(trans2=="FR"?"EN":"FR")


    }
    const [trans2,settrans2]=useState("FR")




  return (
     <div className=''>
        <div className='text-white flex place-content-between mx-5 py-3'>
            <div className='text-2xl md:text-4xl'>
                 <strong>Q</strong>Rift
            </div>
            <div className='md:text-2xl'>
                <button className=' flex '>
                    {trans}<ChevronDown onClick={(e)=>{setshow(!show)}}/>
                </button>
                {show &&
                  <button className='border rounded-lg  px-4 ' onClick={
                    tooglelaung
                  }>
                    {trans2}
                </button>

                }
              

                


            </div>
             









        </div>
         <div className='text-white'>
             <div className='flex justify-center items-center md:text-2xl text-lg '>
               <strong>Create your</strong> 
             </div>
             <div  className='flex justify-center items-center md:text-2xl gap-1 text-lg'>
                <strong>

                
                <span className='text-lightblue'>CUSTOMIZED QR  </span>code for<span className='text-lightblue'> FREE</span>
             </strong></div>

            </div>  











    </div>
  )
}

export default Home