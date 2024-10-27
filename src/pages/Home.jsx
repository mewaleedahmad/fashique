import HomeCarousel from "../components/HomeCarousel"
import Marquee from "../components/Marquee"
import HomeCards from "../components/HomeCards"
import {Headset,CircleCheckBig,Repeat} from "lucide-react"


const Home = () => {
  return (
    <section className="overflow-hidden ">
      <div className="layout flex">
      <HomeCarousel />
      </div>
      <div className="pt-10" >
      <Marquee/>
      </div>
      <section className="layout">
      <div className="flex flex-col text-3xl lg:text-[2.8rem]  gap-1 items-center mt-10 py-4 justify-center">
        <h1>Trending Now</h1>
      <svg className="text-darkPrimary w-56 lg:w-80 " viewBox="-347 -30.1947 694 96.19" stroke="currentColor" fill="none" role="presentation" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeWidth="20" pathLength="1" d="M-335,54 C-335,54 -171,-58 -194,-3 C-217,52 -224.1199951171875,73.552001953125 -127,11 C-68,-27 -137,50 -33,42 C31.43899917602539,37.042999267578125 147.14700317382812,-29.308000564575195 335,2"></path>
    </svg>
      </div>
      <HomeCards for="Men" className="py-12"/>
      </section>

      <div className=" layout About md:hidden space-y-12 md:space-y-0 gap-6 justify-evenly  text-center w-full mb-20 my-10">
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
      
      <div className="Desktop-Footer md:flex flex-col hidden  gap-8 w-full border-t border-darkSecondary  mt-20 items-center py-20 justify-between text-darkPrimary bg-lightPrimary">
        <h1 className="text-5xl font-extrabold  ">FASHIQUE</h1>
        <div className="flex items-center justify-between">
        <div className="flex w-[20%] flex-col gap-1 px-10 items-end ">
          <a className="underline underline-offset-1"  href="https://github.com/Waleed-Gondal"  target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="underline underline-offset-1"  href=""  target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className="underline underline-offset-1"  href=""  target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div>
        <div className=" layout About flex gap-6 justify-between  text-center w-full  my-10">
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
        </div>
       <p className="w-[20%] text-sm px-5">The images used in this website is from <a className="underline underline-offset-2" href="https://outfitters.com.pk/" target="_blank" rel="noopener noreferrer" >Outfitters</a> and only used for learning purpose.</p>
        </div>
      </div>

      <div className="Mobile-Footer  border-t border-darkSecondary text-darkPrimary"></div>
      <div className=" flex flex-col pt-12 pb-6 justify-center items-center gap-4 md:hidden">
      <h1 className="text-5xl font-extrabold text-center  ">FASHIQUE</h1>
      <p className="flex items-center   gap-2 ">
          <a className="underline  underline-offset-1" href="https://github.com/Waleed-Gondal" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="underline underline-offset-1" href="" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className="underline underline-offset-1" href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
       <p className="text-sm pt-4 px-6 text-justify ">The images used in this website is from <a className="underline underline-offset-2" href="https://outfitters.com.pk/" target="_blank" rel="noopener noreferrer">Outfitters</a> and only used for learning purpose.</p>

      </div>
    </section>
  )
}

export default Home