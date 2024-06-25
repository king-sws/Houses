import { useParams } from "react-router-dom"
import {housesData} from '../data/data'
import { BiArea, BiBath, BiBed } from "react-icons/bi"
import { motion } from "framer-motion"

const Property = () => {
  const {id} = useParams()
  const house = housesData.find((house) => {
    return house.id === parseInt(id)
  } )
  return (
    <section >
      <div className="containe w-full">
        {/* ToP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="">
            <h2 className="font-semibold text-2xl" > {house.name} </h2>
            <h3 className="text-lg text-gray-500 mb-4" > {house.address} </h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm ">
            <div className="bg-green-500 py-1 text-white px-3 rounded-2xl font-medium ">{house.type}</div>
            <div className="bg-purple-500 py-1 text-white px-3 rounded-2xl font-medium ">{house.country}</div>
          </div>
          <div className="text-3xl font-semibold text-violet-600"> {house.price} $ </div>
        </div>
      
        <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 flex-col lg:flex-row justify-between ">
          <div>
            <div className="flex flex-col justify-start lg:flex-row gap-y-1 gap-x-8 items-center">
          <div className="">
            <div className="max-w-[800px] flex justify-start items-start mb-5 ">
            <motion.img initial={{ x: -50, opacity: 0  }} animate={{x: 0, opacity: 1  }} transition={{ duration: 1 }} src={house.imageLg} alt="" />
          </div>
          
          </div>
        </div>
        {/* TexT */}
        <div className="flex flex-col gap-x-6 mb-6 text-blue-900/[0.8] ">
            <div className="flex flex-row gap-x-6 mb-6 items-start justify-start ">
                <div className="flex items-center justify-center gap-x-4">
                <BiBed size={20}/>
                <div className="text-2xl"> {house.bedrooms} </div>
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <BiBath size={20}/>
                <div className="text-2xl"> {house.bathrooms} </div>
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <BiArea size={20}/>
                <div className="text-2xl"> {house.surface} </div>
              </div>
            </div>
            <div className="text-gray-600 max-w-[600px] tracking-wide"> {house.description} </div>
          </div>
          {/* TexT */}
          </div>
          {/* Contact */}
          <motion.div initial={{ x: 50, opacity: 0  }} animate={{x: 0, opacity: 1  }} transition={{ duration: 1 }} className="border ml-0 lg:ml-[20%] rounded-lg flex flex-col w-full h-auto lg:h-[400px] max-w-[400px] p-5 shadow-lg">
              <div className="flex gap-3 items-center mb-4">
                <img src={house.agent.image} alt="Agent" className="w-[60px] h-[60px] border-[1px] border-gray-500 rounded-full p-1 hover:scale-105 transition-transform duration-300" />
                <div>
                  <div className="font-bold text-lg">{house.agent.name}</div>
                  <div className="text-sm text-slate-500 cursor-pointer hover:text-slate-700 transition-colors duration-300">View Listings</div>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <input type="text" placeholder="Name" className="border-[1px] w-full border-slate-700 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                <input type="email" placeholder="Email" className="border-[1px] w-full border-slate-700 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition-colors duration-300" />
                <textarea placeholder="Message" className="border-[1px] w-full border-slate-700 rounded-lg p-2 h-[100px] resize-none focus:outline-none focus:border-blue-500 transition-colors duration-300"></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center justify-center">
                <button className="bg-purple-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white font-medium hover:bg-purple-400 transition-colors duration-300 w-full sm:w-auto">Send Message</button>
                <button className="bg-white px-5 sm:px-8 py-2 sm:py-3 rounded-lg text-black border-[1px] font-medium hover:bg-gray-300 transition-colors duration-300 w-full sm:w-auto">Call Now</button>
              </div>

            </motion.div>
            {/* Contact */}
        </div>
        
          
      </div>
    </section>
  )
}

export default Property
