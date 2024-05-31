import { useContext } from "react"
import { HouseContext } from "./HouseContext"
import { Link } from "react-router-dom"
import House from './House'
import { ImSpinner2 } from "react-icons/im"

const HouseList = () => {
    const { houses , loading } = useContext(HouseContext)
    if (loading) {
        return <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px] " />
    }
    if (houses.length < 1 ) {
        return <div className="mt-[100px] font-medium text-center text-3xl text-gray-500 ">Sorry, Nothing found</div>
    }
  return (
    <section id="hotels" >
        <div className="containe">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-10 bg-white gap-x-5 ">
                {houses.map((item , i)=>(
                    <Link to={`/property/${item.id}`} key={i} >
                        <House item={item} />
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default HouseList