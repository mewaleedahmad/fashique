import MainTitle from "../components/MainTitle"
import { products } from "../assets/frontend_assets/assets";


const Cart = () => {
  const cartProducts = ["aaaaj"]
  const product = products.find((product) => product._id === cartProducts[0]);

  return (
    <section className=" w-full ">
      <div className="flex items-start mt-6 border-b border-darkSecondary pb-8">
      <MainTitle title1="YOUR" title2="CART" />
      </div>
      <div className="Cart-Items bg-blue-200 mt-6">
        <p>{product.name}</p>
      </div>

    </section>
  )
}

export default Cart