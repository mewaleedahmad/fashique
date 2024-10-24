import { motion } from "framer-motion"
// eslint-disable-next-line react/prop-types
const Marquee = ({className}) => {
  return (
    <section className="bg-white overflow-hidden absolute left-0 inset-x-0 w-full    ">
    <motion.div animate={{x:[0,-400]}} transition={{ease:"linear",duration:5,repeat:Infinity}} className={` w-full gap-6 items-center overflow-hidden text-nowrap flex ${className} `}>
        <h1 className=" text-[4.3rem]  font-bold">QUALITY OVER QUANTITY</h1>
        <h1 className=" text-[4.3rem]  font-bold">QUALITY OVER QUANTITY</h1>
        <h1 className=" text-[4.3rem]  font-bold">QUALITY OVER QUANTITY</h1>
        <h1 className=" text-[4.3rem]  font-bold">QUALITY OVER QUANTITY</h1>
        <h1 className=" text-[4.3rem]  font-bold">QUALITY OVER QUANTITY</h1>
    </motion.div>
    </section>
  
  )
}

export default Marquee