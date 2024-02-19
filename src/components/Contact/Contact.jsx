import React from 'react'

function Contact() {
    return (
        <>
            <div className='flex justify-center'>
                <h1 className='text-2xl font-bold m-4'>Contact US</h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col '>
                    <input className='text-center border-2 m-2 p-2 rounded-lg' type="text" placeholder='Enter your name' />
                    <input className='text-center border-2  m-2 p-2  rounded-lg' type="text" placeholder='Enter your contact' />
                    <input className='text-center border-2  m-2 p-2  rounded-lg' type="text" placeholder='Enter your email' />
                    <input className='text-center border-2  m-2 p-2  rounded-lg' type="text" placeholder='Enter your address' />
                    <input className='text-center border-2  m-2 p-2 rounded-lg' type="text" placeholder='Enter your product ID' />
                    <button className='text-center border-2  m-2 p-2 rounded-lg bg-blue-500 text-white'>Submit</button>
                </div>

            </div>
            <div className='flex flex-col m-4 justify-center text-center'>
                <h1> Follow us on </h1>
                <div className='m-2'>
                    <button className='p-2 text-2xl hover:text-red-500'>
                    <ion-icon name="logo-instagram"></ion-icon>
                    </button>
                    <button className='p-2 text-2xl hover:text-blue-500'>
                    <ion-icon name="logo-twitter"></ion-icon>
                    </button>
                    <button className='p-2 text-2xl hover:text-gray-500'> 
                    <ion-icon name="logo-github"></ion-icon>
                    </button>
                    <button className='p-2 text-2xl hover:text-red-500'>
                    <ion-icon name="logo-youtube"></ion-icon>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Contact
