import { createContext , useContext, useState } from "react";
import shoppingItems from "../products/Product";

const DataContext = createContext(); 

export const DataProvider = ({children}) =>{
  const[data, setData] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [themeMode,setThemeMode] = useState('light')
  const handleData=()=>{
         setData(prevData => prevData +1);
  }
  const addItems =(item)=>{
    setCartItems((prevItems)=>[...prevItems, item])
  }
  const clearCart=()=>{
    setCartItems([])
    setData(prevData => 0)
    
    // setCartItems((prevItems)=>0);
     
  }

 
 
  return(
    <DataContext.Provider value={{data, handleData, cartItems, addItems , clearCart}}>
      {children}
    </DataContext.Provider>
  )
}



export const useData =()=>{
  return(useContext(DataContext));
};