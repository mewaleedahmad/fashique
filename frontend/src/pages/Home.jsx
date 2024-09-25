import Hero from "../components/Hero"
import HomeItems from "../components/HomeItems"
import MainTitle from "../components/MainTitle"
// 
const Home = () => {
  return (
    <div>
      <Hero />
      <MainTitle title1="MEN" title2="LATEST" className="pt-14"/>
      <HomeItems for="Men" className="pt-12"/>
      {/* <HomeItems for="Women" className="pt-20"/> */}
    </div>
  )
}

export default Home