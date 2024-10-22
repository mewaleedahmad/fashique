import { Link, NavLink } from "react-router-dom" 
import "../app.css"
import { NavLinks } from "../utils/constants"
import { assets } from "../assets/frontend_assets/assets"
import { useEffect, useState } from "react"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [isMenuVisible,setIsMenuVisible]=useState(false)
  const [cartCount,setCartCount] = useState(0)

  const cart = JSON.parse(localStorage.getItem("cart"))

  useEffect(()=>{
    setCartCount(cart === null ? 0 : cart.length)

  },[cart])

  return (
    <div className="flex  justify-between items-center py-5 ">

        <div className="nav-logo">
          <Link to="/" className="cursor-pointer">
            <h1 className="font-bold text-xl md:text-2xl  xl:text-3xl text-darkPrimary">Fashique</h1>
          </Link>
        </div>

        <div className="nav-links">
            <ul className="hidden sm:flex gap-5 justify-center items-baseline text-sm lg:text-md xl:text-lg font-medium text-darkPrimary">
              {NavLinks.map((item)=>(
                <NavLink  to={item.route} key={item.id} className="flex flex-col  justify-center  items-center">
                <motion.h3 whileHover={{scale:1.1}} className=" pb-1">{item.link}</motion.h3>
                <hr className="w-2/4 bg-darkPrimary  h-[2px] hidden "/>
                </NavLink>
              ))}
            </ul>
        </div>

        <div className="nav-buttons"> 
          <div className="flex justify-center items-center gap-5 py-4">

            <Link className="search">
            <img src={assets.search_icon} className="w-5" alt="search"/>
            </Link>

            <div className="profile relative group z-40">
              <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="profile"/>
              <div className="group-hover:block right-[-6px] hidden absolute pt-2">
                <div className="flex flex-col rounded-md px-6 py-3 justify-center items-left  gap-2 w-36 bg-lightSecondary shadow-md font-semibold ">
                  <Link className="cursor-pointer text-darkSecondary hover:text-darkPrimary">My Profile</Link>
                  <Link className="cursor-pointer text-darkSecondary hover:text-darkPrimary">Orders</Link>
                  <Link className="cursor-pointer text-darkSecondary hover:text-darkPrimary">Logout</Link>
                </div>
              </div>
            </div>

              <Link to={"/cart"} className="cart relative">
              <img src={assets.cart_icon} className="w-5 relative cursor-pointer" alt="cart"/>
              <div className="absolute bottom-[-7px] right-[-3px] flex justify-center items-end bg-black text-white  aspect-square w-4 h-4 rounded-full text-[10px]">
                {cartCount}
                </div>
              </Link>

              <Link className="menu-btn overflow-hidden">
              <img src={assets.menu_icon} onClick={()=>setIsMenuVisible(true)} className={`${isMenuVisible ? "hidden" :"flex"} flex sm:hidden cursor-pointer w-5`}/>
              <div className={`mobile-menu ${isMenuVisible ? "flex h-screen" : "hidden"} transition-transform duration-300 ease overflow-hidden gap-2 flex-col items-start absolute top-0 font-medium py-4 left-0 block z-50  w-full bg-lightPrimary text-darkPrimary `}>
                <div  className="flex justify-start items-center gap-1 px-3 lg:px-5 pb-1 " onClick={()=>setIsMenuVisible(false)}>
                <ChevronLeft />
                <h3 className="text-lg ">Back</h3>
                </div>
                <p className="w-screen h-[.5px] bg-gray-400 "/>
              {NavLinks.map((item)=>(
                <Link to={item.route} key={item.id} className="mob" onClick={()=>setIsMenuVisible(false)} >
                  <h3 className={`py-2 px-4 lg:px-6 hover:bg-darkPrimary hover:text-lightSecondary `}>{item.link}</h3>
                  <p className="w-screen h-[1px] "/>
                </Link>
              ))}
              </div>
              </Link>
              
          </div>
        </div>

    </div>
  )
}

export default Navbar