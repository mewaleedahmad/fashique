import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Navbar from "./components/Navbar"
import { useEffect, useState } from 'react'



const App = () => {
  useEffect(()=>{
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", JSON.stringify([]));
    }
  })
  const [cart,setCart] = useState(()=>JSON.parse(localStorage.getItem("cart")) || []);
  
  return (
    <div className=" flex flex-col min-h-screen overflow-x-hidden">
        <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path={`/product/:id`} element={<Product cart={cart} setCart={setCart} />}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App