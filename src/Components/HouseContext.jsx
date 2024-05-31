import { createContext, useEffect, useState } from "react";
import {housesData} from '../data/data'

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {  
  const [houses , setHouses] = useState(housesData)
  const [country , setCountry] = useState('Location (any)')
  const [countries , setCountries] = useState([])
  const [property , setProperty] = useState('Property type (any)')
  const [properties , setProperties] = useState([])
  const [price , setPrice] = useState('Price range (any)')
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    const allCountries = houses.map((house)=>{
        return house.country
    });
    const unique = ['Location (any)',...new Set(allCountries)]
    setCountries(unique)
  },[])

  useEffect(()=>{
    const allProperty = houses.map((house)=>{
        return house.type
    });
    const uniqueP = ['Location (any)',...new Set(allProperty)]
    setProperties(uniqueP)
  },[])

  const HandlerClick = ()=>{
    setLoading(true)
    const isDefault = (str) => (
      str.split(' ').includes('(any)')
    )
    const minPrice = parseInt(price.split(' ')[0] )

    const maxPrice = parseInt(price.split(' ')[2] )

    const newHouses = housesData.filter((house)=>{
      const housePrice = parseInt(house.price)
      if (house.country === country &&
          house.type === property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
      ){
        return house
      }
      if (isDefault(country) && isDefault(property) && isDefault(price) ){
        return house
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price) ){
        return house.country === country
      }
      if (!isDefault(property) && isDefault(country) && isDefault(price) ){
        return house.type === property
      }
      if (!isDefault(price) && isDefault(country) && isDefault(property)   ){
        if (housePrice >= minPrice && housePrice <= maxPrice ){
          return house
        }
      }
      if (!isDefault(country) && !isDefault(property) && isDefault(price) ){
        return house.country === country && house.type === property
      }
      if (!isDefault(country) && isDefault(property) && !isDefault(price) ){
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === country 
        }
      }
      if (isDefault(country) && !isDefault(property) && !isDefault(price) ){
        if (housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property 
        }
      }
      
      
    })
    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false)
    },1000)
  }

  return (
    <HouseContext.Provider value={{
        country,setCountry,loading,countries,property,setProperty,properties,price,setPrice,houses,loading,HandlerClick,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

