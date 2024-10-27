import MainTitle from "../components/MainTitle";
import { products } from "../assets/images/assets";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const Cart = ({cart,setCart}) => {

  const shippingCharges = 300;
  const [total, SetTotal] = useState(null);
  const [Subtotal, setSubTotal] = useState(null);

  const localCartItemsId = cart ? cart.filter((item) => item.id) : [];
  const localCartItemsSize = cart ? cart.filter((item) => item.selectedSize) : [];
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
  .map((item) => item.price)
  .reduce((prev, currentPrice) => prev + currentPrice, 0);

  useEffect(() => {
    const fetchCart = JSON.parse(localStorage.getItem("cart"));
    setCart(fetchCart);
  }, [setCart]);

  useEffect(() => {
    setSubTotal(subTotalPrice );
    SetTotal(Subtotal + shippingCharges);
  }, [total, Subtotal, subTotalPrice,]);

  return (
    <section className="w-full layout mt-5 ">
      <div className="flex items-start mt-5 border-b border-darkSecondary mb-6 pb-8">
        <MainTitle title1="MY" title2="CART" />
      </div>
      {cart.length === 0 && <p className="uppercase text-xl lg:text-2xl font-semibold p-4 lg:p-10">Nothing in Cart...</p>}

      <div className="lg:flex  lg:px-[4vw]">
        <div className="Cart-Items space-y-4 w-full lg:w-[70%]   pb-20">
          {cartItems.map((item) => {
            const cartItemSize = localCartItemsSize.find(
              (localItem) => localItem.id === item._id
            ).selectedSize;
         
            return (
              <div key={item._id} className="flex items-center  gap-2">
                <div className="div-1 rounded-md overflow-auto ">
                  <img
                    src={item.image}
                    alt="Product"
                    className="lg:w-72 lg:h-28 w-32 h-20 object-cover"
                  />
                </div>
                <div className="div-2 flex flex-grow  w-full flex-col gap-2 ">
                  <p className="text-lg leading-none capitalize lg:leading-7">{item.name}</p>
                  <div className="flex items-center gap-2 lg:gap-4">
                    <p className="text-sm bg-lightSecondary border  border-darkSecondary rounded-sm px-2 lg:px-3 lg:py-1 py-[3px] text-center">
                      {cartItemSize || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="div-3 ">
                  <div className="flex lg:flex-row  w-full items-center justify-between flex-col-reverse lg:gap-20 lg:ps-20 gap-4">
                    <p className="text-sm lg:text-[1rem] font-bold lg:ps-20 ">
                      {item.price}&nbsp;PKR
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
              <button className="btn btn-outline w-full mt-8 bg-darkPrimary text-lightPrimary text-[1rem] font-bold">
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
