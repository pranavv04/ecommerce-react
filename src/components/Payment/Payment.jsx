import React, { useState } from 'react'
import Image from '../../../public/images/headphone2.webp'
function Payment() {
  const[data,setData] = useState(1);

  const handleData = ()=>{
    setData(prev => prev+1);
  }
  const removeData = ()=>{
    setData(prev=>prev-1);
    if(setData===0){
      setData(prev=>prev=1);
    }
  }
  return (
    <div>
    
      <div className='flex justify-center'>
                <h1 className='text-2xl font-bold m-4'>Payment</h1>
            </div>
            <div className='flex m-12'>
                <div className='flex  '>
                   <div className='h-60'>
                    <img className='h-40' src={Image} alt="" />
                   </div>
                   <h1 className='m-12'>Gaming Wired Headset </h1>
                </div>
                <div className='flex m-12'>
                  <button onClick={handleData} className='border-2 p-2 h-10'>+</button>
                  <p className='border-2 p-2 h-10'>{data}</p>
                  <button onClick={removeData}  className='border-2 p-2 h-10'>-</button>
                </div>

            </div>
           <div className='flex justify-center'>
            <h1>This page is just a sample. I will complete this page later THANKYOU!!</h1>
           </div>
    </div>
  )
}

export default Payment
