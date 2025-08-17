import React, { useState,useContext } from 'react'
import { Link, Mail, Type, Wifi,Text } from "lucide-react";
import {MyContext} from '../UseCntx'

const Side = () => {
   const { varr, setvar } = useContext(MyContext);

  console.log(varr)




  return (
        <div className='md:w-1/4  flex justify-center  md:flex-none md:justify-normal'>
        
        <div className='flex md:grid md:gap-5 text-lightgray  md:shadow-md md:shadow-lightgray pt-10 rounded-lg md:p-5 sm:gap-11  gap-7 md:w-full md:h-fit '>
          
          <div onClick={()=>{setvar("URL")}} className='rounded-xl flex md:gap-2 gap-1  bg-faint hover:text-lightblue   py-1 sm:px-2 px-1 hover:border-lightblue hover:border  '><Link size={20}/> URL</div>
          <div onClick={()=>{setvar("Text")}} className='rounded-xl  flex md:gap-2 gap-1 bg-faint hover:text-lightblue md:px-4 py-1 sm:px-2 px-1 hover:border-lightblue hover:border'><Text size={20}/>Text</div>
          <div onClick={()=>{setvar("Mail")}} className='rounded-xl  flex md:gap-2 gap-1 bg-faint hover:text-lightblue md:px-4 py-1 sm:px-2 px-1 hover:border-lightblue hover:border'><Mail size={20}/>Email</div>
          <div onClick={()=>{setvar("wifi")}} className='rounded-xl  flex  md:gap-2 gap-1 bg-faint hover:text-lightblue md:px-4 py-1 sm:px-2 px-1 md:mb-40 hover:border-lightblue hover:border'><Wifi size={20}/>Wifi</div>
      
    </div>
    </div>
  )
}

export default Side