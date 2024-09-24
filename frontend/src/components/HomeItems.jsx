import { products } from "../assets/frontend_assets/assets";

const menItems = products.filter(item => item.category === "Men").slice(0,10)
// eslint-disable-next-line react/prop-types
export default function App({className}) {
  return (
    <div className={`gap-6 grid grid-cols-2 sm:grid-cols-5 grid-rows-2  w-full ${className}`}>
      {menItems.map((item) => (
        <div className="card card-compact cursor-pointer bg-lightPrimary  shadow-xl" key={item._id}>
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
