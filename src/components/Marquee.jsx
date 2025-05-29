import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Marquee = ({ className }) => {
  return (
      <section className="hidden md:flex">
        <div  className="bg-black text-white cursor-context-menu z-50 rotate-[4deg] my-20  w-full overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className={`w-full gap-6 first items-center text-nowrap flex ${className}`}
        style={{ display: 'flex' }}
      >
        <div className="flex gap-6 py-1">
          <h4 className="text-[2.8rem] uppercase ">Quality you can trust</h4>
          <h4 className="text-[2.8rem] uppercase ">get ready to stand out</h4>
          <h4 className="text-[2.8rem] uppercase ">unlock your style potential</h4>
        </div>
        <div className="flex gap-6 py-1">
          <h4 className="text-[2.8rem] uppercase ">Quality you can trust</h4>
          <h4 className="text-[2.8rem] uppercase ">get ready to stand out</h4>
          <h4 className="text-[2.8rem] uppercase ">unlock your style potential</h4>
        </div>
        <div className="flex gap-6 py-1">
          <h4 className="text-[2.8rem] uppercase ">Quality you can trust</h4>
          <h4 className="text-[2.8rem] uppercase ">get ready to stand out</h4>
          <h4 className="text-[2.8rem] uppercase ">unlock your style potential</h4>
        </div>

        

      
      </motion.div>
    </div>
      </section>
   
  );
};

export default Marquee;
