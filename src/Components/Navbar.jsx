import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <> 
      <nav className="bg-[#F2E1D9] p-4">
        <div className="container mx-auto flex justify-between items-center px-5 py-3">
          <div className="flex items-center space-x-4">
            <img src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png" alt="Logo" className="h-8 w-8" />
            <Link to="/user" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg flex flex-wrap gap-1 items-center"><FaShoppingCart className="text-[35px] text-[#af5227]" />Cart</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Home</Link>
            <Link to="/about" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">About</Link>
            <Link to="/contact" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Contact</Link>
            <Link to="/blog" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Blog</Link>
            <Link to="/layoutTwo" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Product</Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar