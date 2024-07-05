import { Link } from "react-router-dom"

const NavbarTwo = () => {
  return (
   <>
       <nav className="bg-[#F2E1D9] p-4">
        <div className="container mx-auto flex justify-between items-center px-5 py-3">
          <div className="flex items-center space-x-4">
            <img src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png" alt="Logo" className="h-8 w-8" />
            <Link to="/user" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">User</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Home</Link>
            <Link to="/sofa" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Sofa</Link>
            <Link to="/bed" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Bed</Link>
            <Link to="/chair" className="text-black text-[24px] font-sans font-semibold hover:text-[#af5227] text-lg">Chair</Link>
          </div>
        </div>
      </nav>
   </>
  )
}

export default NavbarTwo