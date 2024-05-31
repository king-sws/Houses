import Country from '../Components/Country'
import PropertyDropdown from '../Components/PropertyDropdown'
import PriceRange from '../Components/PriceRange'
import { RiSearch2Line } from "react-icons/ri";
import { useContext } from 'react';
import { HouseContext } from './HouseContext';

const Search = () => {
  const {HandlerClick} = useContext(HouseContext)
  return (
    <div className='containe mt-10 lg:space-y-0 shadow-lg md:space-y-0 space-y-6  rounded-lg flex flex-col lg:flex-row md:flex-row justify-between items-start bg-slate-300/[0.4] px-7 py-6' >
        <Country />
        <PropertyDropdown />
        <PriceRange />
        <button onClick={()=>HandlerClick() } className='px-10 mx-auto rounded-xl sm:mt-3 shadow-xl hover:bg-purple-500 text-white hover:text-black py-4 bg-purple-600 ' >
            <RiSearch2Line size={20} />
        </button>
    </div>
  )
}

export default Search