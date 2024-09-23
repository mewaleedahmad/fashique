import Card from "./Card";
import MainTitle from "./MainTitle"

const productType = ["Topwear","Bottomwear","Footwear"];
const productPrice = ["Under 1000","1000 - 2000","2000 - 3000","3000 - 4000","4000 - 5000","Above 5000 " ]

// eslint-disable-next-line react/prop-types
const Collection = ({page_title}) => {
  return (
    <section className="flex gap-10 w-full mt-10 ">
      <div  className="filter w-[20%]  flex flex-col gap-2 ">

        <h4 className="text-xl font-bold">FILTERS</h4>
        <div className="product-type border border-darkSecondary mt-5 px-5 py-4">
          <p className="font-semibold pb-4">TYPE</p>
          {productType.map((type,i)=>(
          <div className="flex justify-start pb-2 gap-3 items-center" key={i}>
            <input type="checkbox" name="type" value={type}/>
            <p>{type}</p>
          </div>
          ))}
        </div>
        <div className="product-color border flex flex-col gap-4 overflow-hidden  border-darkSecondary mt-5 px-5 py-4">
        <p className="font-semibold  block">PRICE</p>
          {productPrice.map((price,i)=>(
          <div className="flex justify-start  gap-3  text-justify items-center" key={i}>
            <input type="checkbox" name="type" value={price}/>
            <p>{price}&nbsp;PKR</p>
          </div>
          ))}
        </div>
        
        
      </div>

      <div className="products w-[75%]  ">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <MainTitle title={page_title}/>
           <div>
           <select className="px-2 py-4 bg-lightPrimary  shadow-sm rounded-md text-md font-bold border-darkSecondary border">
              <option className="font-normal  ">Sort By : Relevant </option>
              <option className="font-normal ">Sort By : High to Low </option>
              <option className="font-normal ">Sort By : Low to High</option>
            </select>
           </div>
          </div>
          <div className="grid">
            <Card/>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Collection