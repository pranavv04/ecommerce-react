import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import {Route,RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Shopping from './components/Shopping/Shopping.jsx'
import Payment from './components/Payment/Payment.jsx'
import Cart from './components/Cart/Cart.jsx'
import { DataProvider } from './context/DataContext.jsx';
import Contact from './components/Contact/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}></Route>
      <Route path='shopping' element={<Shopping/>}></Route>
      <Route path='payment' element={<Payment/>}></Route>
      <Route path='contact' element= {<Contact/>}></Route>
    </Route>
     <Route path='cart' element={<Cart/>}></Route>
    
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <DataProvider>
    <RouterProvider router={router} />
    </DataProvider>
  </React.StrictMode>,
)
