import { products } from "../assets/frontend_assets/assets";

const filterProducts = products.filter(item => item.category === "Men")
export default function Card() {
  return (
    <div className={`gap-6 grid grid-cols-2 md:grid-cols-3   grid-rows-2  w-full `}>
      {filterProducts.map((item) => (
        <div className="card card-compact cursor-pointer  bg-lightPrimary  shadow-xl" key={item._id}>
        <figure>
          <img
            src={item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-lg font-medium">{item.name}</p>
          <p className="text-lg font-bold">{item.price}&nbsp;PKR</p>
        </div>
      </div>
      ))}
    </div>
  );
}
