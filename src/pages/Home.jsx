import Hero from "../components/Hero"
import HomeItems from "../components/HomeItems"
import {Headset,CircleCheckBig,Repeat} from "lucide-react"
import Marquee from "../components/Marquee"
// 
const Home = () => {
  return (
    <section className="overflow-hidden ">
      <div className="layout flex">
      <Hero />
      </div>
      <section className="layout">
      <div className="flex flex-col text-3xl lg:text-[2.8rem]  gap-1 items-center mt-14 py-4 justify-center">
        <h1>Trending Now</h1>
      <svg className="text-darkPrimary w-56 lg:w-80 " viewBox="-347 -30.1947 694 96.19" stroke="currentColor" fill="none" role="presentation" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeWidth="20" pathLength="1" d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2"></path>
    </svg>
      </div>
      <HomeItems for="Men" className="py-12"/>
      </section>
      <Marquee/>

      <div className=" layout About md:hidden space-y-12 md:space-y-0 gap-6 justify-evenly  text-center w-full mb-20 mt-14">
        <div className="flex flex-col items-center justify-center gap-1">
          <Repeat size={40}/>
          <p className="text-darkPrimary text-lg font-bold mt-4">Exchange Policy</p>
          <p className="text-darkSecondary text-sm font-medium">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <CircleCheckBig size={40}/>
          <p className="text-darkPrimary text-lg font-bold mt-4">Return Policy</p>
          <p className="text-darkSecondary text-sm font-medium">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <Headset size={40}/>
          <p className="text-darkPrimary text-lg font-bold mt-4">Customer Support</p>
          <p className="text-darkSecondary text-sm font-medium">We provide 24/7 customer support</p>
        </div>

      </div>
      <div className="Footer flex justify-center border-t border-darkSecondary">
        <p className="py-5 text-sm capitalize">Made with &#10084; By Waleed Ahmad </p>
      </div>
      
    </section>
  )
}

export default Home