import HomeCarousel from "../components/HomeCarousel"
import Marquee from "../components/Marquee"
import HomeCards from "../components/HomeCards"
import Footer from "../components/Footer"


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
     <Footer/>
    </section>
  )
}

export default Home