import MainTitle from "./MainTitle";
import { useState} from "react";
import { MoveLeft,SlidersHorizontal } from "lucide-react";
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
  
  const [filter,setFilter] = useState(false);
  const [sortOrder,setSortOrder]= useState("Relevant")
  const [subCategory,setSubCategory] = useState([]);
  const [priceRange,setPriceRange] = useState([0,Infinity]);

const handleFilter = ()=>{
  setFilter(!filter)
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
    <>
           <MainTitle title1={title1} title2={title2} className="layout mt-8 lg:mt-16 " />
          <section className="block layout  mt-6 lg:mt-0 lg:flex gap-3 w-full   ">
      <div className={`filter ${filter ? "flex flex-col": "hidden"} absolute lg:relative lg:mt-12 lg:px-0 px-6 py-4   bg-lightPrimary h-screen  w-full lg:w-[20vw] left-0 z-50  `}>
        
        <div className={`flex flex-col`}>
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">FILTERS</p>
            <button onClick={()=>handleFilter(false)} >
          <MoveLeft className="size-9"/>
          </button>
          </div>
        <div className="product-type  mt-4 px-5 lg:px-1 py-2">
          <p className="font-bold text-xl pb-4">Type</p>
          {productType.map((type, i) => (
            <div className="flex justify-start pb-2 gap-3 items-center" key={i}>
              <input
                type="checkbox"
                name="type"
                className="checkbox checkbox-sm font-bold"
                onChange={()=>handleSubCategory(type)}
                checked={subCategory.includes(type)}
              />
              <p className="text-md font-bold">{type}</p>
            </div>
          ))}
        </div>

        <div className="Price-Filter  flex flex-col gap-4 overflow-hidden  px-5 lg:px-1 ">
          <p className="font-semibold  text-xl block">Price</p>
          {productPrice.map((price, i) => (
            <div
              className="flex justify-start  gap-3  text-justify items-center"
              key={i}
            >
              <input
                type="radio"
                name="price"
                className="checkbox radio-sm "
                onChange={()=>handlePriceRange(price.range)}
              />
              <p className="text-md font-bold">{price.label}&nbsp;PKR</p>
            </div>
          ))}
        </div>
        </div>
      </div>

      <div className="products  md:w-full ">
        <div className="flex flex-col gap-2">
          <div className="flex justify-end gap-4 text-xl lg:gap-0 flex-row  items-center">
            <div className=" mt-4 text-lg  ">
              <select value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)} className="px-1 py-3  bg-lightPrimary outline-none shadow-sm rounded-md lg:text-md text-sm font-bold border-darkSecondary border">
              <option  className="font-regular " selected>Sort By : Relevant </option>
              <option  className="font-regular ">Sort By : Low to High</option>
              <option  className="font-regular ">Sort By : High to Low </option>
            </select>
            </div>
          </div>

          <div className={`flex font-bold gap-2 ${filter === false ? "flex" : "invisible"} items-center mb-2 cursor-pointer`} onClick={()=>handleFilter(true)}>
      <h4 className="text-xl">FILTERS</h4>
      <SlidersHorizontal className="size-4" />
        </div>

          <div className="Cards  ">
            <div className={`gap-x-3 gap-y-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4   pb-10  grid-rows-2  w-full `}>
          {filteredProducts.length > 0 ? (
          filteredProducts.map((product) =>(
            <motion.div key={product._id} className=" rounded-md  overflow-hidden card-compact cursor-pointer bg-lightPrimary glass" >
                  <Link to={`/product/${product._id}`} >
                <figure className=" w-full overflow-hidden ">
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="w-full xl:h-[26rem] lg:h-[22rem] md:h-[18rem] h-[15rem] object-cover transition-transform duration-200 ease-in-out hover:scale-125" />
                </figure>
                <div className="flex  flex-col gap-1 text-sm px-3 py-2 pt-3 ">
                  <p className=" font-medium capitalize">
                  {product.category === "Men" && <span>Men&nbsp;</span> || product.category === "Women" && <span>Women&nbsp;</span>}{product.name}
                  </p>
                  <p className=" text-red-800 text-md font-bold">{product.price}&nbsp;PKR</p>
                </div >
                </Link>
              </motion.div>))) : <p className="text-xl font-bold absolute top-60 left-70 text-red-800">Currently No Products Available</p>
            }
            </div>
          </div>
          </div>
          </div>
          </section>
          </>
  );
};

export default Collection;
