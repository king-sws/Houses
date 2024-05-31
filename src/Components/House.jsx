import { BiArea, BiBath, BiBed } from 'react-icons/bi'

const House = ({item}) => {
  const {image , type , country, price,  address, bedrooms, bathrooms, surface} = item
  return (
    <div className=' bg-gray-100/[0.8] border mx-auto rounded-lg rounded-tl-[90px] transition w-full max-w-[352px] p-5 shadow-1 cursor-pointer hover:shadow-2xl ' >
      <img src={image} alt="" />
      <div className="">
        <div className="flex gap-x-12 my-3">
          <div className='bg-green-500 transition rounded-xl px-3 text-white font-medium hover:bg-green-400' > {type} </div>
          <div className='bg-purple-500 transition rounded-xl px-3 text-white font-medium hover:bg-purple-400' > {country} </div>
        </div>
          <div className="text-lg wax-w-[220px] font-medium "> {address} </div>
          <div className="flex gap-x-5">
            <div className="flex gap-x-2 justify-start my-1 items-center">
                <BiBed size={20} className='text-blue-900/[0.8] ' />
              <div className="text-blue-900/[0.8] font-semibold  "> {bedrooms} </div>
            </div>
            <div className="flex gap-x-2 justify-start my-1 items-center">
                <BiBath size={20} className='text-blue-900/[0.8] ' />
              <div className="text-blue-900/[0.8] font-semibold  "> {bathrooms} </div>
            </div>
            <div className="flex gap-x-2 justify-start my-1 items-center">
                <BiArea size={20} className='text-blue-900/[0.8] ' />
              <div className="text-blue-900/[0.8] font-semibold  "> {surface} </div>
            </div>
          </div>
          <div className="font-bold text-slate-600 "> {price}$ </div>
      </div>
    </div>
  )
}

export default House