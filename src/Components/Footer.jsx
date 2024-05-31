import { FaFacebook } from "react-icons/fa"
import { FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-slate-400/[0.9] mt-10 text-white p-4">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                    <a href="/">
                        <img src="/logo.svg" alt="" />
                    </a>
        <p className="text-sm mt-3 ">© 2024 HomeLand. All rights reserved.</p>
      </div>
      <div className="w-full md:w-auto">
        <h3 className="text-lg text-black font-bold mb-2">Contact Us</h3>
        <ul className="list-none">
          <li><a href="mailto:HomeLand@gmail.com" className="hover:text-gray-400 transition-colors">HomeLand@gmail.com</a></li>
          <li><a href="tel:+1234567890" className="hover:text-gray-400 transition-colors">+1 234 567 890</a></li>
        </ul>
      </div>
      <div className="w-full md:w-auto">
        <h3 className="text-lg text-black font-bold mb-3">Follow Us</h3>
        <ul className="flex gap-x-8">
          <li><a href="#" className="hover:text-blue-400 text-xl transition-colors"><FaFacebook /></a></li>
          <li><a href="#" className="hover:text-gray-400 text-xl transition-colors"><FaTwitter /></a></li>
          <li><a href="#" className="hover:text-red-400 text-xl transition-colors"><FaInstagram/></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer