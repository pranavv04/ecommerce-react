import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import shoppingItems from '../../products/Product';
function Cart() {
  const { cartItems, addItems ,clearCart} = useData();

 
  const itemToAdd = shoppingItems[0];

  
  console.log(cartItems);
  return (
    <div className='flex flex-col m-5'>
      <div className='flex right-0 mr-3 text-center'>
        <Link to='/'>
          <button className='p-2 rounded-md text-xl hover:bg-gray-100 font-extrabold'>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </button>
        </Link>
        <p className='m-2'>Continue Shopping</p>
      </div>
      <div className='flex justify-center'>
        <h1 className='justify-center text-xl font-semibold'>Your Added Items</h1>
      </div>
      <hr />
      <div>
        <div>
          {cartItems.map((item) => (
            <div className='flex m-4' key={item.id}>
              <div className=' flex  m-4 h-30 bg-gray-200 rounded-xl' >
                <img className='h-40' src={item.image} alt={item.name} />
              </div>
              <div>
              <p className='mt-8 ml-12 text-lg '>{item.name}</p>
              <p className='mt-8 ml-12 text-lg font-semibold'>{item.price}</p>
              <div className='mt-8 ml-12 '>
                <button onClick={clearCart} className='text-2xl hover:text-red-600'>
                <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
