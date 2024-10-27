import {  useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from "../assets/images/assets";
import { useParams } from "react-router-dom";

const Product = ({cart,setCart}) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeNotSelectedError, setSizeNotSelectedError] = useState(false);

  const notifyAdded = () => toast("Added To Cart");
  const notifyError = () => toast("Already In Cart");

  const product = products.find((product) => product._id === id);

  const addToCart = () => {
    const item = { id, selectedSize};
    if(cart.find(i => i.id === id)){
      notifyError();
    }else{
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      notifyAdded();
    }
    const fetchCart = JSON.parse(localStorage.getItem("cart"));
    setCart(fetchCart);
  }
 
  return (
    <div className="w-full layout   lg:flex gap-6 mt-10">
      <div  className="image-section lg:w-[35%]  w-full rounded-md overflow-hidden ">
      <img src={product.image} alt={product.name} className=" object-cover transition-transform duration-200 ease-in-out hover:scale-125 " />
      </div>
      <div className="details-section lg:w-[60%] w-full flex flex-col gap-4 py-10 px-3 lg:px-6 ">
        <p className="text-2xl md:text-3xl font-medium capitalize">{product.name}</p>
        <p className="text-red-800 text-xl md:text-2xl ps-1 font-bold">{product.price} PKR</p>
        <p className="mt-5 text-sm md:text-[1rem] ">{product.description}</p>
        <p className="font-bold text-sm mt-4">SELECT SIZE</p>
        <div className="flex gap-2">
          {product.sizes.map((size, i) => (
            <button 
              onClick={() => { setSelectedSize(size); setSizeNotSelectedError(false); }} 
              key={i} 
              className={`${selectedSize === size ? "border-red-800 border-2" : "border-darkSecondary border"} bg-lightSecondary text-sm font-medium rounded-sm w-12 px-2 py-2 text-center`}>
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
          <button 
            onClick={() => (selectedSize === "" ? setSizeNotSelectedError(true) : addToCart())} 
            className="btn  btn-outline w-40 bg-darkPrimary text-lightPrimary font-normal rounded-md mt-5">
            ADD TO CART
          </button>
          {sizeNotSelectedError && 
            <p className="pt-2 px-6 text-red-800 text-sm font-semibold">Select Any Size</p>
          }
        </div>
        
        <div className="border-t text-sm  capitalize border-darkSecondary mt-8 pt-8 flex flex-col gap-1">
          <p>100% Original Product.</p>
          <p>Cash on delivery is Available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p> 
        </div>
      </div>
    </div>
  );
}

export default Product;
