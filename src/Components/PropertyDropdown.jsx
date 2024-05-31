import { RiHome5Line , RiArrowDownSLine , RiArrowUpSLine } from "react-icons/ri"
import { Menu } from "@headlessui/react"
import {HouseContext} from './HouseContext'
import { useContext, useState } from "react"

const  PropertyDropdown = () => {
  const {property , setProperty , properties} = useContext(HouseContext)
  
  const [isOpen , setIsopen] = useState(false)
  return (
    <Menu as='div' className='dropdown relative ' >
      <Menu.Button onClick={()=>setIsopen(!isOpen)} className='dropdown-btn w-full text-left ' >
        <RiHome5Line className="dropdown-icon-primary" />
        <div className="" >
          <div className="text-[15px] font-medium" > {property} </div>
          <div className="text-[11px] " > Select Your Place </div>
        </div>
          {isOpen ?  <RiArrowUpSLine className="dropdown-icon-secondary" /> : <RiArrowDownSLine className="dropdown-icon-secondary" /> }
      </Menu.Button>

      <Menu.Items className='dropdown-menu' >
        {properties.map((item , i)=>(
          <Menu.Item as='li' key={i} onClick={() => setProperty(item)} className='cursor-pointer hover:text-violet-700 transition ' >
            {item}
          </Menu.Item>
        ))}
      </Menu.Items>

    </Menu>
  )
}

export default PropertyDropdown
