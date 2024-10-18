// import { products } from "../assets/frontend_assets/assets"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  useState } from "react"
const sizes = ["S","M","L","XL","XXL"]

// eslint-disable-next-line react/prop-types
const Product = () => {
  const [selectedSize,SetSelectedSize] = useState("")
  const [sizeNotSelectedError,setSizeNotSelectedError]= useState()
  const notify = () => toast("Added To Cart");
  return (
    <div className="w-full h-screen flex">
      <div className="image-section w-1/2  h-screen">
     
      </div>
      <div className="details-section w-1/2  flex flex-col gap-4 py-20 px-6  h-screen">
      <p className="text-3xl font-medium">Tshirt</p>
      <p className="text-red-800 text-xl font-bold">1500 PKR</p>
      <p className="mt-8 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed neque veritatis molestias consequatur repellat vitae distinctio est eius id.</p>
      <p className="font-bold text-sm mt-4">SELECT SIZE</p>
      <div className="flex gap-2">
        {sizes.map((size, i) => (
          <button onClick={()=>{SetSelectedSize(size),setSizeNotSelectedError(false) }} value={selectedSize} key={i} className={`${selectedSize === size ? "border-red-800 border-2" : "border-darkSecondary border"} bg-lightSecondary   text-sm rounded-sm w-12 px-2 py-2 text-center`}>
            {size}
          </button>
        ))}
      </div>
      <div>
      <ToastContainer
             position="top-right"
             autoClose={1000}
             hideProgressBar={true}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             theme="dark"
/>
      <button  onClick={()=>( selectedSize === "" ? setSizeNotSelectedError(true) : notify() )} className="btn btn-outline w-40 bg-darkPrimary  text-lightPrimary font-normal rounded-md  mt-5">ADD TO CART</button>
      {
        sizeNotSelectedError && <p className={`pt-2 px-6 text-red-800 text-sm font-semibold`}>Select Any Size</p> 
      }
      </div>
      <div className=" border-t text-sm capitalize border-darkSecondary mt-8 pt-8 flex flex-col gap-1">
        <p>100% Original Product.</p>
        <p>Cash on delivery is Available on this product.</p>
        <p>Easy return and exchange policy within 7 days.</p>
      </div>
      </div>
    </div> 
    
  )
}

export default Product