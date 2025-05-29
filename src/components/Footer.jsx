import {Headset,CircleCheckBig,Repeat} from "lucide-react"

const Footer = () => {
  return (
         <div className="w-full  flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16   border-t border-darkSecondary  mt-20 py-20 md:py-28 text-darkPrimary bg-lightPrimary">
        <div className="flex flex-col items-center justify-center gap-1">
          <Repeat size={36}/>
          <p className="text-darkPrimary text-xl font-bold mt-2 text-center">Exchange Policy</p>
          <p className="text-darkSecondary text-base font-medium text-center">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <CircleCheckBig size={36}/>
          <p className="text-darkPrimary text-xl font-bold mt-2 text-center">Return Policy</p>
          <p className="text-darkSecondary text-base font-medium text-center">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <Headset size={36}/>
          <p className="text-darkPrimary text-xl font-bold mt-2 text-center">Customer Support</p>
          <p className="text-darkSecondary text-base font-medium text-center">We provide 24/7 customer support</p>
        </div>
      </div>
  )
}

export default Footer