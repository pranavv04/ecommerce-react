import React, { useState } from 'react'

import shoppingItems from '../../products/Product';
  import { useData } from '../../context/DataContext.jsx';

function Home() {
  const { handleData, addItems } = useData();

  const handleCartItems = (item)=>{
    addItems(item)
  }
  const handleonClicks = (clickedItem) => {
 

    handleCartItems({
      id: clickedItem.id,
      name: clickedItem.name,
      image: clickedItem.image,
      price: clickedItem.price
    });
  
    
    handleData();
  };
  return (
    <>
   <div className='flex  m-20  bg-red-500 rounded-xl shadow-2xl '>
    <div className='h-60'>
      <img className='h-80'  src="/images/headphones1.webp" alt="" />
    </div>
    <div className='ml-40 mt-12'>
      <h1 className='text-5xl text-white  font-extrabold p-2' >Summer Sale</h1>
      <p className='text-xl text-white font-bold p-2'>Offer is valid till End of May</p>
      <button className='m-5 flex bg-white text-red-500 h-12 p-5 pt-3 rounded-xl font-bold text-center hover:bg-black transition duration-500 ease-in-out shadow-xl' onClick={handleData}>Shop Now</button>
    </div>
   </div> 
   <div className='flex m-20 justify-center'>
     <div className='mt-12 mr-20'>
      <h2 className='m-5 text-4xl font-extrabold'>Best gaming Earphones Available</h2>
      <p className='m-2 ml-5 text-2xl font-bold'>Summer offer sale</p>
      <button  className='m-4 ml-5 bg-red-500 text-white font-bold p-3 rounded-xl shadow-xl hover:bg-black transition duration-500 ease-in-out' onClick={handleData}>Shop Now</button>
     </div>
     <div className='h-70  bg-gray-400 rounded-xl shadow-2xl hover:bg-red-500 transition duration-700 ease-in-out'>
      <img className='h-80' src="images/earphone3.webp" alt="" />
     </div>
   </div>
   <div className='m-20 text-center'>
    <h2 className='text-4xl font-bold m-5'> Our Products</h2>
    <div className='grid grid-cols-4 gap-7'>
    {shoppingItems.map((item) => (
  <div  key={item.id}>
    <div className='h-40 flex justify-center shadow-xl bg-gray-300 rounded-xl '> 
      <img  className='h-40' src={item.image} alt={item.name} />
    </div>
    <div className='flex flex-col  text-center justify-center'>
      <p className='text-lg  font-bold'>{item.name}</p>
      <div className='flex text-center justify-center' >
      <p className='text-md font-bold pr-5'>{item.price}</p>
      <button onClick={()=>handleonClicks(item)} className='text-xl bg-gray-200 rounded-lg p-1 cursor-pointer'>
    <ion-icon className='text-4xl' name="cart-outline"></ion-icon>
     </button>
      </div>
    </div>
  </div>  
))}

    </div>
   </div>
   </>
  )
}


export default Home;