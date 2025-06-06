import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from "../assets/images/assets"

const carouselItems = [
  {
    title: "MEN COLLECTION",
    image: assets.men_hero,
    route: "/men"
  },
  {
    title: "WOMEN COLLECTION",
    image: assets.women_hero,
    route: "/women"
  },
  {
    title: "KIDS COLLECTION ",
    image: assets.kid_hero,
    route: "/kids"
  }
];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = carouselItems[currentIndex];

  const handleDivClick = () => {
    navigate(currentSlide.route);
  };

  return (
    <div
      className="relative w-full lg:h-[80vh] overflow-hidden bg-lightPrimary border mt-4 border-darkPrimary cursor-pointer"
      onClick={handleDivClick}
    >
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={goToPrevious} className="p-2 bg-lightSecondary rounded-full shadow-md hover:bg-lightPrimary z-10">
          <ChevronLeft size={24} />
        </button>
        <button onClick={goToNext} className="p-2 bg-lightSecondary rounded-full shadow-md hover:bg-lightPrimary z-10">
          <ChevronRight size={24} />
        </button>
      </div>
      <div 
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex" style={{ width: `${carouselItems.length * 100}%` }}>
          {carouselItems.map((item, index) => (
            <div key={index} className="flex flex-col justify-center w-full md:flex-row" style={{ width: `${100 / carouselItems.length}%` }}>
              <div className="w-full lg:w-1/2 lg:h-[80vh] p-8 flex flex-col gap-6 items-center justify-center">
                <div className='flex gap-2 md:gap-3 justify-center items-center'>
                  <p className='w-12 md:w-20 lg:w-24 h-[2px] lg:h-[2.5px] bg-darkPrimary'></p>
                  <p className="md:text-xl lg:text-3xl text-lg font-bold">LATEST ARRIVALS</p>
                </div>
                <h1 className="lg:text-3xl md:text-3xl text-xl font-bold text-nowrap">{item.title}</h1>
                <div className='flex justify-start items-center gap-2 md:gap-3'>
                  <Link
                    to={item.route}
                    className='font-bold lg:text-3xl md:text-xl text-lg'
                    onClick={(e) => e.stopPropagation()}
                  >
                    EXPLORE NOW
                  </Link>
                  <p className='w-12 md:w-20 lg:w-24 h-[2px] lg:h-[2.5px] bg-darkPrimary'></p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;