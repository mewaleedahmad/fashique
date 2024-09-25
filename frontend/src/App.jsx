import './index.css'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Kids from "./pages/Kids"
import About from "./pages/About"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="layout flex flex-col min-h-screen overflow-x-hidden">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/men" element={<Men/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App