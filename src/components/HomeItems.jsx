import { products } from "../assets/images/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Items = products.filter(item => item.bestseller).slice(0,8)
// eslint-disable-next-line react/prop-types
export default function App({className}) {
  return (
    <section className=" flex flex-col w-full items-center">
    <div className={`gap-x-3 gap-y-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   w-full ${className}`}>
      {Items.map((item) => (
        <motion.div   className="rounded-md glass overflow-hidden   card-compact cursor-pointer bg-lightPrimary " key={item._id}>
          <Link to={`/product/${item._id}`} >
          <figure className=" w-full overflow-hidden ">
  <img
    src={item.image}
    alt={item.name}
    className="w-full xl:h-[26rem] lg:h-[22rem] md:h-[18rem]  h-[15rem] object-cover   "
  />
</figure>
        <div className="flex flex-col gap-1 text-sm px-3 py-2 pt-3">
          <p className="text-md font-medium">{item.name}</p>
          <p className="text-md text-red-800 font-bold">{item.price}&nbsp;PKR</p>
        </div>
        </Link>
      </motion.div>
      ))}
    </div>
     </section>
  //  
  );
}
