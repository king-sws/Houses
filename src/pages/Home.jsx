import Hero from '../Components/Hero'
import HouseList from '../Components/HouseList'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('Scrolling to top', pathname);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, [pathname]);
  return (
    <div>
      
      <Hero />
      <HouseList />
    </div>
  )
}

export default Home