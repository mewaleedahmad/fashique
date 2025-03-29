import { Link, NavLink } from "react-router-dom" 
import { assets } from "../assets/images/assets"
import { useEffect, useState } from "react"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

const NavLinks = [
  {
    id:1,
    link : "HOME",
    route : "/"
  },
  {
    id:2,
    link : "MEN",
    route : "/men"
  },
  {
    id:3,
    link : "WOMEN",
    route : "/women"
  },
  {
    id:4,
    link : "KIDS",
    route : "/kids"
  },
  
]

const Navbar = ({cart}) => {
  const [isMenuVisible,setIsMenuVisible]=useState(false)
  const [cartCount,setCartCount] = useState(0)
  useEffect(()=>{
    const cartdata = cart ? cart.length : []
    setCartCount(cartdata)
  },[cart])
  
  return (
    <div className="flex layout  justify-between items-center pt-4  ">

        <div className="nav-logo">
          <Link to="/" className="cursor-pointer">
            <h1 className="font-bold text-xl md:text-2xl  xl:text-3xl text-darkPrimary">Fashique</h1>
          </Link>
        </div>

        <div className="nav-links lg:pe-14">
            <ul className="hidden sm:flex gap-5 justify-center items-baseline text-sm lg:text-md xl:text-lg font-medium text-darkPrimary">
              {NavLinks.map((item)=>(
                <NavLink  to={item.route} key={item.id} className="flex flex-col  justify-center  items-center">
                <motion.h3 whileHover={{scale:1.1}} className=" pb-1">{item.link}</motion.h3>
                <hr className="w-3/4 bg-darkPrimary  h-[2.2px] hidden "/>
                </NavLink>
              ))}
            </ul>
        </div>

        <div className="nav-buttons"> 
          <div className="flex justify-center items-center gap-5 py-4 ">

              <Link to={"/cart"} className="cart relative ">
              <img src={assets.cart_icon} className="w-5 relative cursor-pointer" alt="cart"/>
              <div className="absolute bottom-[-7px] right-[-3px] flex justify-center items-end bg-black text-white  aspect-square w-4 h-4 rounded-full text-[10px]">
                {cartCount}
                </div>
              </Link>

              <div className="menu-btn overflow-hidden">
              <img src={assets.menu_icon} onClick={()=>setIsMenuVisible(true)} className={`${isMenuVisible ? "hidden" :"flex"} flex sm:hidden cursor-pointer w-5`}/>
              <div className={`mobile-menu ${isMenuVisible ? "flex h-screen" : "hidden"} transition-transform duration-300 ease overflow-hidden gap-2 flex-col items-start absolute top-0 font-medium py-4 left-0 block z-50  w-full bg-lightPrimary text-darkPrimary `}>
                <div  className="flex justify-start cursor-pointer items-center gap-1 px-3 lg:px-5 pb-1 " onClick={()=>setIsMenuVisible(false)}>
                <ChevronLeft />
                <h3 className="text-lg ">Back</h3>
                </div>
                <p className="w-screen h-[.5px] bg-gray-400 "/>
              {NavLinks.map((item)=>(
                <div key={item.id} onClick={()=>setIsMenuVisible(false)} className="w-full">
                  <Link to={item.route} className="block  font-bold py-2 px-4 lg:px-6 hover:bg-darkPrimary hover:text-lightSecondary">
                    {item.link}
                  </Link>
                  <p className="w-screen h-[1px] "/>
                </div>
              ))}
              </div>
              </div>
              
          </div>
        </div>

    </div>
  )
}

export default Navbar