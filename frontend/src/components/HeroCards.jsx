import { WobbleCard } from "../components/ui/wobble-card.jsx";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "MEN",
    image: assets.male_hero_img,
    route: "/men",
  },
  {
    id: 2,
    title: "WOMEN",
    image: assets.female_hero_img,
    route: "/women",
  },
  
];

export function HeroCard() {
  return (
    <Link to="/men">
    <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer  gap-4 p-0 m-0 w-full">
      {cardData.map((card) => (
        <WobbleCard key={card.id} className="p-0 m-0  overflow-hidden h-full">
          <img src={card.image} className="w-full  p-0" />
          <h1 className="text-center text-xl">{card.title}</h1>
        </WobbleCard>
      ))}
    </div>
    </Link>
  );
}
