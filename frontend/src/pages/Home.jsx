import Hero from "../components/Hero"
import HomeItems from "../components/HomeItems"
import MainTitle from "../components/MainTitle"
// import Marquee from "../components/Marquee"
// 
const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MainTitle title1="MEN" title2="LATEST" className="pt-14"/>
      <HomeItems for="Men" className="pt-12"/>
      
    </div>
  )
}

export default Home