import React, { useState } from 'react'
// import { DataProvider } from '../../context/CardNum'
import {Link , NavLink} from 'react-router-dom'
import { useData } from '../../context/DataContext.jsx';

function Header() {
    const { data ,cartItems} = useData();
  return (
    <header className="shadow sticky z-50 top-0">
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img
                    src="../../public/images/buds-removebg-preview.png"
                    className="mr-3 h-20"
                    alt="Logo"
                />
            </Link>
            <div className="flex items-center lg:order-2">
                <Link
                    to="#"
                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                 <ion-icon name="moon-outline"></ion-icon>
                </Link>
                <Link
                    to="cart"
                    className=" bg-gray-200 hover:bg-gray-300  font-bold rounded-lg px-2 lg:px-3 py-2 lg:py-1 mr-2 focus:outline-none text-xl "
                >
                   <ion-icon  name="cart-outline"></ion-icon>
                   
                </Link>
            {cartItems.length===0 || ""? <p className='bg-red-500 text-white  rounded-3xl p-2 pt-0 pb-0 absolute right-28 top-14'>0</p> :<p className='bg-red-500 text-white  rounded-3xl p-2 pt-0 pb-0 absolute right-28 top-14'>{data}</p> }
            </div>
            <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
            >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                        to="/"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/shopping"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Shop Now
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contact"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/payment"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Payment
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header
