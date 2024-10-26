import { products } from "../assets/images/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Items = products.filter(item => item.bestseller).slice(0,8)
// eslint-disable-next-line react/prop-types
export default function App({className}) {
  return (
    <section className=" flex flex-col w-full items-center">
    <div className={`gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4   w-full ${className}`}>
      {Items.map((item) => (
        <motion.div  whileHover={{scale:1.1}} className="rounded-md glass overflow-hidden card-compact cursor-pointer bg-lightPrimary " key={item._id}>
          <Link to={`/product/${item._id}`} >
          <figure className=" w-full overflow-hidden">
  <img
    src={item.image}
    alt={item.name}
    className="w-full h-full object-cover"
  />
</figure>
        <div className="card-body">
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
