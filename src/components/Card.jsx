import { motion } from "framer-motion";
export default function Card({product,key}) {
  return (
    <div className={`gap-x-5 gap-y-8 grid grid-cols-2 md:grid-cols-3   grid-rows-2  w-full `}>
      {product.map((product) => (
        <motion.div whileHover={{scale:1.1}}key={key} className=" rounded-sm overflow-hidden card-compact cursor-pointer bg-lightPrimary shadow-md" >
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
