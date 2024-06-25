import Search from "../Components/Search"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <section id="home" className="" >
      <div className="containe w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center ">
          <div className="">
            <motion.h1 initial={{ x: -100, opacity: 0  }} animate={{x: 0, opacity: 1  }} transition={{ duration: 1 }} className="text-[40px] lg:text-[60px] text-center lg:text-start mg:text-[50px] max-w-[450px] lg:leading-[80px]" ><span className="text-purple-600" >Rent </span>Your Dream House With Us. </motion.h1>
            <motion.p initial={{ x: -100, opacity: 0  }} animate={{x: 0, opacity: 1  }} transition={{ duration: 1 }} className="max-w-[450px] mt-4 tracking-wide text-start " >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptatum iure provident quia facere temporibus, quibusdam soluta quae. Id, reprehenderit.</motion.p>
          </div>
          <div className="md:flex hidden mt-8 ">
            <motion.img initial={{ x: 100, opacity: 0  }} animate={{x: 0, opacity: 1  }} transition={{ duration: 1 }} src="/house-banner.png" alt="LOL" className="w-[400px] h-[400px] lg:w-[400px] lg:h-[400px]   " />
          </div>
        </div>
      <Search />
      </div>
    </section>
  )
}

export default Home