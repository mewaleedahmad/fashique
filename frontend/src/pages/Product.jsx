// import { products } from "../assets/frontend_assets/assets"
// eslint-disable-next-line react/prop-types
const Product = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="image-section w-1/2 bg-pink-300 h-screen">
     
      </div>
      <div className="details-section w-1/2  flex flex-col gap-4 py-14 px-6  h-screen">
      <p className="text-3xl font-medium">Tshirt</p>
      <p className="text-red-900 text-xl font-bold">1500 PKR</p>
      <p className="mt-8 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sed neque veritatis molestias consequatur repellat vitae distinctio est eius id.</p>
      <p className="font-bold text-sm mt-4">SELECT SIZE</p>

      </div>
    </div> 
    
  )
}

export default Product