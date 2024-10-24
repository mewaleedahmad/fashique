// eslint-disable-next-line react/prop-types
const MainTitle = ({title1,title2,className}) => {
  return (
    <div className={`flex justify-center gap-3 items-center ${className}`}>
        <div className="flex justify-center items-center gap-2 text-3xl">
        <h1 className="">{title1}</h1>
        <h1 className="">{title2}</h1>
        </div>
        <p className='w-10 md:w-16 lg:24 h-[2px] bg-darkSecondary'></p>
    </div>
    
  )
}

export default MainTitle