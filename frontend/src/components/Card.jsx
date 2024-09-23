import { assets } from "../assets/frontend_assets/assets"

const productCard =[
  {
    img : assets.p_img4,
    title :"Black T-shirt",
    price : 1500
  }
]

const Card = () => {
  return (
    <div className="bg-lightSecondary shadow-lg flex flex-col">
      {productCard.map((item,i)=>(
        <div key={i}>
          <img className="w-full object-cover" src={item.img}/>
        <p className="text-xl">{item.title}</p>
        <p className="text-md">{item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Card