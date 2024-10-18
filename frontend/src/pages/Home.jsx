import Hero from "../components/Hero"
import HomeItems from "../components/HomeItems"
import MainTitle from "../components/MainTitle"
import {Headset,CircleCheckBig,Repeat} from "lucide-react"
// import Marquee from "../components/Marquee"
// 
const Home = () => {
  return (
    <section className="overflow-hidden">
      <Hero />
      <MainTitle title1="MEN" title2="LATEST" className="pt-14"/>
      <HomeItems for="Men" className="pt-12"/>

      <div className="About md:flex space-y-12 md:space-y-0 gap-6 justify-evenly  text-center w-full mb-20 mt-14">
        <div className="flex flex-col items-center justify-center gap-1">
          <Repeat size={40}/>
          <p className="text-darkPrimary text-lg font-bold mt-4">Easy Exchange Policy</p>
          <p className="text-darkSecondary text-sm font-medium">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <CircleCheckBig size={40}/>
          <p className="text-darkPrimary text-lg font-bold mt-4">7 Days Return Policy</p>
          <p className="text-darkSecondary text-sm font-medium">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <Headset size={40}/>
          <p className="text-darkPrimary text-lg font-bold mt-4">Best Customer Support</p>
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