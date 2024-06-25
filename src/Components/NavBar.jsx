import { useEffect, useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

function NavBar() {
    const [open , setopen] = useState(false)
    const toggel = ()=> setopen(!open)
    const [header , setheader] = useState(false)


    useEffect(() => {
      const Handler = () => {
        window.scrollY > 50 ? setheader(true) : setheader(false)
      }
      window.addEventListener("scroll" , Handler)
      return ()=> (
        window.removeEventListener("scroll" , Handler)
      )
  
      
    })
    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      }, []);
    
    const isHomePage = location.pathname === '/';
  return (
    <header  className={`${header ? 'bg-white shadow-lg' : ''} sticky top-0 z-30 transition-all `} >
        <nav className="flex containee justify-between items-center" >
            <a href="/">
                <img src="/logo.svg" alt="" />
            </a>
            
            {isHomePage && ( <div className="md:flex hidden  justify-center items-center gap-x-12 ">
                <a href="#home" >
                    <p className="text-base font-medium text-gray-600 hover:text-black" >Home</p>
                </a>
                <a href="#hotels">
                    <p className="text-base font-medium text-gray-600 hover:text-black" >Hotels</p>
                </a>
                <HashLink to="/contact">
                    <p className="text-base font-medium text-gray-600 hover:text-black" >Contact us</p>
                </HashLink>
            </div>) }

            <div className="md:flex hidden justify-between items-center">
                
                <div className="flex items-center justify-center gap-x-4 ">
                    <a href="/">
                        <button className="font-medium bg-transparent flex justify-center items-center rounded-[10px] p-2 w-[90px] h-[40px] hover:bg-gray-200  " >Log in</button>
                    </a>
                    <a href="/">
                        <button className=" flex justify-center items-center text-white bg-purple-600 hover:bg-purple-500 font-medium rounded-[10px] p-2 w-[90px] h-[40px] " >Sign up</button>
                    </a>
                </div>
            </div>
            
            
            <div className="flex md:hidden" onClick={toggel} >
                {!open ? <IoMenu size={30} /> : <IoClose size={30} />  }
                <div className={`fixed flex-col shadow-lg z-50 right-4 w-full max-w-xs bg-[#e9edf2] rounded-lg  p-6 text-base font-semibold text-slate-900 top-20 highlight-white/5 ${open ? 'flex' : 'hidden'}`} >
                    <div className="flex flex-col space-y-3 justify-start items-start ">
                    <a href="#home">
                            <p className="text-base font-semibold hover:text-purple-500 hover:transition-all text-gray-800 " >Home</p>
                        </a>
                        <a href="#hotels">
                            <p className="text-base font-semibold hover:text-purple-500 hover:transition-all text-gray-800 " >Hotels</p>
                        </a>
                        <HashLink to="/contact">
                            <p className="text-base font-semibold hover:text-purple-500 hover:transition-all text-gray-800" >Contact us</p>
                        </HashLink>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-500 flex items-center justify-start gap-x-[80px] ">
                    <a href="/log in">
                        <button className="font-medium bg-transparent flex justify-center items-center rounded-[10px] p-2 w-[90px] h-[40px] hover:bg-gray-200  " >Log in</button>
                    </a>
                    <a href="/Sign up">
                        <button className=" flex justify-center items-center text-white bg-purple-600 hover:bg-purple-500 font-medium rounded-[10px] p-2 w-[90px] h-[40px] " >Sign up</button>
                    </a>
                </div>

                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar