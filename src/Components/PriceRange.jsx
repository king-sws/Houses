import { RiWallet3Line , RiArrowDownSLine , RiArrowUpSLine } from "react-icons/ri"
import { Menu } from "@headlessui/react"
import {HouseContext} from './HouseContext'
import { useContext, useState } from "react"

const  PropertyDropdown = () => {
  const {price , setPrice } = useContext(HouseContext)
  
  const [isOpen , setIsopen] = useState(false)

  const loading = [
    {
      value : 'Price range (any) '
    },
    {
      value : '100000 - 130000'
    },
    {
      value : '130000 - 160000'
    },
    {
      value : '160000 - 190000'
    },
    {
      value : '190000 - 220000'
    },
    {
      value : '10000 - 30000'
    },
    {
      value : '30000 - 40000'
    },
  ]
  
  return (
    <Menu as='div' className='dropdown relative ' >
      <Menu.Button onClick={()=>setIsopen(!isOpen)} className='dropdown-btn w-full text-left ' >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div className="" >
          <div className="text-[15px] font-medium" > {price} </div>
          <div className="text-[11px] " > Choose price range </div>
        </div>
          {isOpen ?  <RiArrowUpSLine className="dropdown-icon-secondary" /> : <RiArrowDownSLine className="dropdown-icon-secondary" /> }
      </Menu.Button>

      <Menu.Items className='dropdown-menu' >
        {loading.map((item , i)=>(
          <Menu.Item as='li' key={i} onClick={() => setPrice(item.value)} className='cursor-pointer hover:text-violet-700 transition ' >
            {item.value}
          </Menu.Item>
        ))}
      </Menu.Items>

    </Menu>
  )
}

export default PropertyDropdown
