
// eslint-disable-next-line react/prop-types
const MainTitle = ({title}) => {
  return (
    <div className="flex justify-center gap-3 items-center ">
        <div className="flex justify-center items-center gap-2 text-3xl">
        <h1 className="text-darkSecondary">{title}</h1>
        <h1>Collection</h1>
        </div>
        <p className='w-10 md:w-16 lg:24 h-[2px] bg-darkPrimary'></p>
    </div>
    
  )
}

export default MainTitle