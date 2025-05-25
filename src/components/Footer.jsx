import {Headset,CircleCheckBig,Repeat, Github} from "lucide-react"

const Footer = () => {
  return (
    <section>
         <div className="Desktop-Footer md:flex flex-col hidden  gap-8 w-full border-t border-darkSecondary  mt-20 items-center py-20  justify-between text-darkPrimary bg-lightPrimary">
        {/* <h1 className="text-5xl font-extrabold  ">FASHIQUE</h1> */}
        <div className="flex items-center justify-between">
        <div className="flex w-[20%] flex-col gap-1 px-10 items-end ">
          <a 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-lightPrimary text-darkPrimary hover:bg-darkPrimary hover:text-lightPrimary transition-all duration-300 shadow-md hover:shadow-lg"  
            href="https://github.com/Waleed-Gondal"  
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          {/* <a className="underline underline-offset-1"  href="https://x.com/_Waleed_Gondal"  target="_blank" rel="noopener noreferrer">Twitter</a> */}
          {/* <a className="underline underline-offset-1"  href="https://www.linkedin.com/in/waleed-ahmad-3489982a8/"  target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
        </div>
        <div>
        <div className=" layout About flex gap-6 justify-between  text-center w-full  my-10">
        <div className="flex flex-col items-center justify-center gap-1">
          <Repeat size={34}/>
          <p className="text-darkPrimary text-lg font-bold mt-2">Exchange Policy</p>
          <p className="text-darkSecondary text-sm font-medium">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <CircleCheckBig size={34}/>
          <p className="text-darkPrimary text-lg font-bold mt-2">Return Policy</p>
          <p className="text-darkSecondary text-sm font-medium">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <Headset size={34}/>
          <p className="text-darkPrimary text-lg font-bold mt-2">Customer Support</p>
          <p className="text-darkSecondary text-sm font-medium">We provide 24/7 customer support</p>
        </div>
      </div>
        </div>
       <p className="w-[20%] text-sm px-5">The images used in this website is from <a className="underline underline-offset-2" href="https://outfitters.com.pk/" target="_blank" rel="noopener noreferrer" >Outfitters</a> and only used for learning purpose.</p>
        </div>
      </div>

      <div className="Mobile-Footer  border-t border-darkSecondary text-darkPrimary">
      <div className=" flex flex-col pt-12 pb-6 justify-center items-center gap-4 md:hidden">
      {/* <h1 className="text-5xl font-extrabold text-center  ">FASHIQUE</h1> */}
      <p className="flex items-center gap-2">
          <a 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-lightPrimary text-darkPrimary hover:bg-darkPrimary hover:text-lightPrimary transition-all duration-300 shadow-md hover:shadow-lg"  
            href="https://github.com/Waleed-Gondal" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          {/* <a className="underline text-sm underline-offset-1" href="https://x.com/_Waleed_Gondal" target="_blank" rel="noopener noreferrer">Twitter</a> */}
          {/* <a className="underline text-sm underline-offset-1" href="https://www.linkedin.com/in/waleed-ahmad-3489982a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a> */}
        </p>
       <p className="text-xs pt-4 px-6 text-justify ">The images used in this website is from <a className="underline underline-offset-2" href="https://outfitters.com.pk/" target="_blank" rel="noopener noreferrer">Outfitters</a> and only used for learning purpose.</p>

      </div>
      </div>
    </section>
  )
}

export default Footer