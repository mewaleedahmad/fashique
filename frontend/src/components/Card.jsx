import { motion } from "framer-motion";
import { products } from "../assets/frontend_assets/assets";
const filterProducts = products.filter(item => item.category === "Men")
export default function Card() {
  return (
    <div className={`gap-x-5 gap-y-8 grid grid-cols-2 md:grid-cols-3   grid-rows-2  w-full `}>
      {filterProducts.map((item) => (
        <motion.div whileHover={{scale:1.1}}  className=" rounded-sm overflow-hidden card-compact cursor-pointer bg-lightPrimary shadow-md" key={item._id}>
        <figure>
          <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-md font-medium">{item.name}</p>
          <p className="text-md text-red-900 font-bold">PKR&nbsp;{item.price}</p>
        </div>
      </motion.div>
      ))}
    </div>
  );
}
