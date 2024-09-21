import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from "../assets/frontend_assets/assets"

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

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
      className="relative w-full lg:h-[70vh] overflow-hidden mt-4 bg-lightPrimary border border-darkPrimary cursor-pointer"
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
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 p-8 flex flex-col gap-6 items-center justify-center">
          <div className='flex gap-2 md:gap-4 justify-center items-center'>
            <p className='w-12 md:w-20 lg:24 h-[2px] bg-darkPrimary'></p>
            <p className="md:text-xl lg:text-2xl text-lg font-bold">LATEST ARRIVALS</p>
          </div>
          <h1 className=" lg:text-3xl md:text-2xl text-xl font-bold text-nowrap">{currentSlide.title}</h1>
          <div className='flex justify-start items-center  gap-2 md:gap-4'>
            <Link
              to={currentSlide.route}
              className='font-bold  lg:text-2xl md:text-xl text-lg'
              onClick={(e) => e.stopPropagation()}
            >
              EXPLORE NOW
            </Link>
            <p className='w-12 md:w-20 lg:24 h-[1.5px] bg-darkPrimary'></p>
          </div>
        </div>
        <div className="w-full md:w-1/2  bg-gray-200">
          <img src={currentSlide.image} alt={currentSlide.title} className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;