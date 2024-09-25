import Card from "./Card";
import MainTitle from "./MainTitle";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const productType = ["Topwear", "Bottomwear", "Footwear"];
const productPrice = [
  "Under 1000",
  "1000 - 2000",
  "2000 - 3000",
  "3000 - 4000",
  "4000 - 5000",
  "Above 5000 ",
];

// eslint-disable-next-line react/prop-types
const Collection = ({ title1,title2 }) => {
  const [mobileFilter,SetMobileFilter] = useState(false)
const handleMobileFilter = ()=>{
  SetMobileFilter(!mobileFilter)
}
  return (
    <section className="block 300 lg:flex gap-10 w-full mt-10  ">
      <div className={`filter lg:w-96 mb-5 lg:mb-0 w-full  lg:flex lg:flex-col gap-2 lg:pt-8`}>
        <div className="flex gap-2 items-center" onClick={()=>handleMobileFilter(true)}>
      <h4 className="text-xl font-bold cursor-pointer  lg:cursor-none">FILTERS</h4>
      <ChevronRight className="lg:hidden flex"/>
        </div>
        <div className={`${mobileFilter ? "flex flex-col": "hidden"} lg:flex lg:flex-col`}>
        <div className="product-type border rounded-sm border-darkSecondary mt-5 px-5 py-4">
          <p className="font-semibold pb-4">TYPE</p>
          {productType.map((type, i) => (
            <div className="flex justify-start pb-2 gap-3 items-center" key={i}>
              <input
                type="checkbox"
                name="type"
                className="checkbox checkbox-xs"
              />
              <p>{type}</p>
            </div>
          ))}
        </div>
        <div className="product-color border rounded-sm flex flex-col gap-4 overflow-hidden  border-darkSecondary mt-5 px-5 py-4">
          <p className="font-semibold  block">PRICE</p>
          {productPrice.map((price, i) => (
            <div
              className="flex justify-start  gap-3  text-justify items-center"
              key={i}
            >
              <input
                type="checkbox"
                name="price"
                className="checkbox checkbox-xs"
              />
              <p>{price}&nbsp;PKR</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className="products  md:w-full  ">
        <div className="flex flex-col gap-6">
          <div className="flex lg:justify-between gap-4 lg:gap-0 flex-col lg:flex-row items-center  pb-4">
            <MainTitle title1={title1} title2={title2} className="self-start" />
            <div className="self-end">
              <select className="px-2 py-4  bg-lightPrimary outline-none shadow-sm rounded-md lg:text-md text-sm font-bold border-darkSecondary border">
              <option  className="font-normal " selected>Sort By : Relevant </option>
              <option  className="font-normal ">Sort By : High to Low </option>
              <option  className="font-normal ">Sort By : Low to High</option>
            </select>
            </div>
          </div>
          <div className="">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
