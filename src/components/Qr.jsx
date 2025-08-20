import React,{useState,useContext} from 'react'

import { Download,RefreshCcw} from "lucide-react";
import { QRCodeCanvas,QRCodeSVG  } from "qrcode.react";
import QRCodeStyling from "qr-code-styling";
import html2canvas from "html2canvas"; 
import {MyContext} from '../UseCntx'
 

const Qr = () => {
   const { url,seturl,text,settext } = useContext(MyContext);

  
   const [value, setValue] = useState(200); // starting value (px)
   const [qr,setqr]=useState("")


   const QrCodeDownload = async () => {
  const canvas = await (
    await html2canvas(document.getElementById("canvas"))
  ).toDataURL();

  if (canvas) {
    setqr(canvas);
    const a = document.createElement("a");
    a.download = "QrCode.png";
    a.href = canvas;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};
const regenerate=()=>{
  seturl("jfhuierfu")
  
}

  // Convert slider value into resolution text
  const getResolution = (val) => {
    return `${val}x${val}px`;
  };
  return (
    <div className='flex justify-center items-center  rounded-lg  md:shadow-around md:rounded-md md:shadow-lightgray md:w-1/4  mb-5 p-6'>
      <div  >
        <div className='text-white md:text-2xl text-lg flex justify-center my-2' >Preview QR Code</div>
        <div className='flex items-center justify-center rounded-lg' id="canvas">
      <QRCodeCanvas
  value={url}
  size={150}
  bgColor="#ffffff"   // white background
  fgColor="#000000"
     // black modules
 includeMargin={true} 

  level="H"
 
/>
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
       
        <div className='flex gap-5 mt-4'>
          <button className='flex gap-1 bg-faint p-1 rounded-xl text-white hover:bg-lightblue hover:border hover:border-lightblue'onClick={QrCodeDownload}> <Download />Dwnload Qr </button>
          <button className=' flex bg-faint p-1 rounded-xl text-white hover:bg-lightblue hover:border hover:border-lightblue' onClick={regenerate}><RefreshCcw/> Regenerate</button>
        </div>

      </div>
        

      
      </div>
      








    </div>
  )
}

export default Qr