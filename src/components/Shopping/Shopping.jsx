import React, { useState } from 'react'
import shoppingItems from '../../products/Product'
import { useData } from '../../context/DataContext'
function Shopping() {
  const{handleData , addItems} = useData();

  const handleCartItems =(item)=>{
    addItems(item)
  }

  const handleItemsClick = (clickedItem)=>{
          handleCartItems({
            id:clickedItem.id,
            name:clickedItem.name,
            image:clickedItem.image,
            price:clickedItem.price
          });

          handleData();
  }
  return (
    <div >
      <h1 className=' flex justify-center m-7 text-4xl font-extrabold '>Shopping Items</h1>
      <div className='grid grid-cols-4 gap-7 m-20'>
          {shoppingItems.map((item)=>(
            <div key={item.id}>
             <div className='h-40 bg-gray-300 shadow-xl rounded-xl flex  justify-center'>
              <img className='h-40' src={item.image} alt="" />
             </div>
             <div className='flex flex-col justify-center text-center'>
              <p className='text-lg font-medium '>{item.name}</p>
              <p className='text-md font-bold'>{item.price}</p>
              <button onClick={()=>handleCartItems(item)} className='text-xl font-bold '>
              <ion-icon name="cart-outline"></ion-icon>
              </button>
             </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Shopping
