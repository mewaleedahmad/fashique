import MainTitle from "../components/MainTitle";
import { products } from "../assets/images/assets";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({cart,setCart}) => {

  const shippingCharges = 300;
  const [total, SetTotal] = useState(0);
  const [Subtotal, setSubTotal] = useState(0);

  const localCartItemsId = cart ? cart.filter((item) => item.id) : [];
  const localCartItemsSize = cart ? cart.filter((item) => item.selectedSize) : [];
  const localCartItemsQuantity = cart ? cart.filter((item) => item.quantity) : [];
  const filteredProducts = products.filter((prod) => prod._id);
  const cartItems = filteredProducts.filter((cartItem) =>
    localCartItemsId.some((localItem) => localItem.id === cartItem._id)
  );
 
  const handleDeleteCartItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const subTotalPrice = cartItems
    .map((item) => {
      const cartItemQuantity = localCartItemsQuantity.find(
        (localItem) => localItem.id === item._id
      )?.quantity || 1;
      return item.price * cartItemQuantity;
    })
    .reduce((prev, currentPrice) => prev + currentPrice, 0);

  useEffect(() => {
    const fetchCart = JSON.parse(localStorage.getItem("cart"));
    setCart(fetchCart);
  }, [setCart]);

  useEffect(() => {
    setSubTotal(subTotalPrice);
    SetTotal(subTotalPrice + shippingCharges);
  }, [subTotalPrice, shippingCharges]);

  useEffect(()=>{
   (Subtotal !== null || 0)  &&  localStorage.setItem("subTotal",Subtotal)
  })
  // console.log(localCartItemsId)

  const handleIncrement = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  


  return (
    <section className="w-full layout mt-5 ">
      <div className="flex items-start mt-5 border-b border-darkSecondary mb-6 pb-8">
        <MainTitle title1="MY" title2="CART" />
      </div>
      {cart.length === 0 && <p className=" text-xl lg:text-2xl text-red-800 font-semibold p-4 lg:p-10">Cart is empty</p>}

      <div className="lg:flex  lg:px-[4vw]">
        <div className="Cart-Items space-y-4 w-full lg:w-[70%]   pb-20">
          {cartItems.map((item) => {
            const cartItemSize = localCartItemsSize.find(
              (localItem) => localItem.id === item._id
            )?.selectedSize || "N/A";
            const cartItemQuantity = localCartItemsQuantity.find(
              (localItem) => localItem.id === item._id
            )?.quantity || 1;
         
            return (
              <div key={item._id} className="flex items-center gap-2 lg:gap-4">
                <div className="div-1 rounded-md overflow-auto ">
                  <img
                    src={item.image}
                    alt="Product"
                    className="lg:w-56 lg:h-24 w-32 h-20 object-cover"
                  />
                </div>
                <div className="div-2 flex flex-grow  w-full flex-col gap-2 ">
                  <p className="text-lg leading-none capitalize lg:leading-7">{item.name}</p>
                  <div className="flex items-center gap-4 lg:gap-8">
                    <p className="text-sm  bg-lightSecondary border  border-darkSecondary rounded-sm px-2 lg:px-3 lg:py-1 py-[3px] text-center">
                      {cartItemSize}
                    </p>
                    <div className="flex items-center gap-4 lg:gap-4 ">

                    <p className="text-base ">Quantity</p>
                      <button onClick={()=>handleDecrement(item._id)} className=" text-base hover:bg-darkPrimary hover:text-lightPrimary   bg-lightSecondary border text-center align-middle leading-4  border-darkSecondary rounded-full w-4 h-4  ">-</button>
                      <p className="font-bold text-sm">{cartItemQuantity}</p>
                      <button onClick={()=>handleIncrement(item._id)} className=" text-base hover:bg-darkPrimary hover:text-lightPrimary  bg-lightSecondary border text-center align-middle leading-4 border-darkSecondary rounded-full w-4 h-4  ">+</button>
                    </div>
          
                  </div>
                </div>

                <div className="div-3 ">
                  <div className="flex lg:flex-row  w-full items-center justify-between flex-col-reverse lg:gap-20 lg:ps-20 gap-4">
                    <p className="text-sm lg:text-[1rem] font-bold lg:ps-20 ">
                      {item.price * cartItemQuantity}&nbsp;PKR
                    </p>
                    <button
                      className="btn btn-ghost btn-circle  hover:bg-lightSecondary"
                      onClick={() => handleDeleteCartItem(item._id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {localCartItemsId.length > 0 && (
          <div className="lg:w-[30%] w-full lg:border-0 border-t border-darkSecondary pt-6 lg:px-10 lg:ml-10 mt-8 flex flex-col gap-1">
            <div className="pb-10">
              <div className="border-b border-darkSecondary pb-6">
                <p className="text-2xl font-extrabold pb-8">Summary</p>
                <div className="flex justify-between items-center font-semibold">
                  <p>Subtotal</p>
                  <p>{Subtotal}&nbsp;PKR</p>
                </div>
                <div className="flex justify-between items-center font-semibold">
                  <p>Shipping</p>
                  <p>{shippingCharges}&nbsp;PKR</p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 font-extrabold text-red-800 text-lg">
                <p>Total</p>
                <p>{total}&nbsp;PKR</p>
              </div>
              <Link to="/checkout" className="btn btn-outline w-full mt-8 bg-darkPrimary text-lightPrimary text-[1rem] font-bold">
                Check Out
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
