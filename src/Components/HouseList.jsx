import { useContext , useEffect } from "react"
import { HouseContext } from "./HouseContext"
import { Link, useLocation } from "react-router-dom";
import House from './House'
import { ImSpinner2 } from "react-icons/im"
import { motion } from "framer-motion"

const HouseList = () => {
    const { pathname } = useLocation();
    const { houses, loading } = useContext(HouseContext);

    useEffect(() => {
        console.log('Scrolling to top', pathname);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }, [pathname]);

    if (loading) {
        return <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />;
    }
    if (houses.length < 1) {
        return <div className="mt-[100px] font-medium text-center text-3xl text-gray-500">Sorry, Nothing found</div>;
    }
    
  return (
    <section id="hotels" >
        <div className="containe">
            <div  className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 bg-white gap-x-5 ">
                {houses.map((item , i)=>(
                    <motion.div initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }} key={i}>
                        <Link to={`/property/${item.id}`}>
                        <House item={item} />
                    </Link>
                    </motion.div>
                    
                ))}
            </div>
        </div>
    </section>
  )
}

export default HouseList