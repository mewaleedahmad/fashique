import MainTitle from "./MainTitle";
import { useState} from "react";
import { ChevronRight } from "lucide-react";
import { products } from "../assets/images/assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const productType = ["Topwear", "Bottomwear", "Footwear"];
const productPrice = [
  { label: "Under 1000", range: [0, 1000] },
  { label: "1000 - 2000", range: [1000, 2000] },
  { label: "2000 - 3000", range: [2000, 3000] },
  { label: "3000 - 4000", range: [3000, 4000] },
  { label: "4000 - 5000", range: [4000, 5000] },
  { label: "Above 5000", range: [5000, Infinity] },
];

// eslint-disable-next-line react/prop-types
const Collection = ({ category,title1,title2 }) => {
  
  const [mobileFilter,SetMobileFilter] = useState(false);
  const [sortOrder,setSortOrder]= useState("Relevant")
  const [subCategory,setSubCategory] = useState([]);
  const [priceRange,setPriceRange] = useState([0,Infinity]);

const handleMobileFilter = ()=>{
  SetMobileFilter(!mobileFilter)
}

const handleSubCategory = (type) => {
  setSubCategory((prev) =>(
    prev.includes(type) ? prev.filter((sub) => sub !== type) : [...prev, type])
  );
};

const handlePriceRange=(price)=>{
  setPriceRange(price)
}

const filteredProducts = products.filter((product) => (
  product.category === category &&
  (subCategory.length === 0 || subCategory.includes(product.subCategory)) &&
  product.price >= priceRange[0] && product.price <= priceRange[1]
));

const sortedProducts = filteredProducts.sort((a,b)=>{
  if(sortOrder === "Sort By : Low to High") return a.price - b.price;
  if(sortOrder === "Sort By : High to Low") return b.price - a.price;
  return 0;
})

  return (
    <section className="block layout  mt-10 lg:flex gap-10 w-full   ">
      <div className={`filter lg:w-80 mb-5 lg:mb-0 w-full  lg:flex lg:flex-col gap-2 lg:pt-8`}>
        <div className="flex gap-2 items-center " onClick={()=>handleMobileFilter(true)}>
      <h4 className="text-xl font-bold cursor-pointer lg:mt-5  lg:cursor-none">FILTERS</h4>
      <ChevronRight className="lg:hidden flex cursor-pointer"/>
        </div>
        <div className={`${mobileFilter ? "flex flex-col": "hidden"}  lg:flex lg:flex-col`}>
        <div className="product-type border rounded-sm border-darkSecondary mt-5 px-5 py-4">
          <p className="font-semibold pb-4">TYPE</p>
          {productType.map((type, i) => (
            <div className="flex justify-start pb-2 gap-3 items-center" key={i}>
              <input
                type="checkbox"
                name="type"
                className="checkbox checkbox-xs"
                onChange={()=>handleSubCategory(type)}
                checked={subCategory.includes(type)}
              />
              <p>{type}</p>
            </div>
          ))}
        </div>

        <div className="Price-Filter border rounded-sm flex flex-col gap-4 overflow-hidden  border-darkSecondary mt-5 px-5 py-4">
          <p className="font-semibold  block">PRICE</p>
          {productPrice.map((price, i) => (
            <div
              className="flex justify-start  gap-3  text-justify items-center"
              key={i}
            >
              <input
                type="radio"
                
                name="price"
                className="checkbox radio-xs"
                onChange={()=>handlePriceRange(price.range)}
              />
              <p>{price.label}&nbsp;PKR</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className="products  md:w-full  ">
        <div className="flex flex-col gap-6">
          <div className="flex lg:justify-between gap-4 lg:gap-0 flex-col lg:flex-row items-center  pb-4">
            <MainTitle title1={title1} title2={title2} className="self-start" />
            <div className="self-end mt-4">
              <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)} className="px-2 py-4  bg-lightPrimary outline-none shadow-sm rounded-md lg:text-md text-sm font-bold border-darkSecondary border">
              <option  className="font-regular " selected>Sort By : Relevant </option>
              <option  className="font-regular ">Sort By : Low to High</option>
              <option  className="font-regular ">Sort By : High to Low </option>
            </select>
            </div>
          </div>

          <div className="Cards">
            <div className={`gap-x-3 gap-y-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4   pb-10  grid-rows-2  w-full `}>
          {filteredProducts.length > 0 ? (
          filteredProducts.map((product) =>(
            <motion.div whileHover={{scale:1.1}}key={product._id} className=" rounded-md  overflow-hidden card-compact cursor-pointer bg-lightPrimary glass" >
                  <Link to={`/product/${product._id}`} >
                <figure className=" w-full overflow-hidden ">
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="w-full xl:h-[26rem] lg:h-[22rem] md:h-[18rem] h-[15rem] object-cover" />
                </figure>
                <div className="flex flex-col gap-1 text-sm px-3 py-2 pt-3 ">
                  <p className=" font-medium">{product.name}</p>
                  <p className=" text-red-800 font-bold">{product.price}&nbsp;PKR</p>
                </div >
                </Link>
              </motion.div>))) : <p className="text-xl font-bold absolute top-60 left-70 text-red-800">Currently No Products Available</p>
            }
            </div>
          </div>
          </div>
          </div>
          </section>
  );
};

export default Collection;
