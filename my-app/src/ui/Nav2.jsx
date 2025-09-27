import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { BsFillBagPlusFill } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LoginCard from "./LoginCard";
import { useState } from "react";
import CategoriesDropdown from "./CategoriseDropdown";

function Nav2() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/shop?search=${searchQuery}`);
      setShowMobileSearch(false); // hide search on mobile after search
    }
  };

  return (
    <nav className="relative grid grid-rows-2 w-full h-fit bg-white">
      {/* Top section */}
      <div className="grid grid-cols-6 mx-12 my-3 items-center relative">
        {/* Logo */}
        <div className="text-4xl text-left">
          <GiShop />
        </div>

        {/* Desktop Search */}
        <div className="col-span-4 hidden sm:flex items-center justify-center px-2">
          <div className="flex items-center w-full max-w-2xl bg-white border rounded-lg shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search for product..."
              className="flex-1 px-3 py-2 text-sm outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSearch}
              className="px-4 py-2 bg-gray-600 text-white hover:bg-blue-400 transition"
            >
              <CiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Search Button */}
        <div className="col-span-4 sm:hidden flex justify-end pr-2">
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="text-gray-600"
          >
            <CiSearch size={24} />
          </button>
        </div>

        {/* Account buttons */}
        <div className="flex justify-center items-center">
          <div className="mx-2 sm:w-fit md:w-fit lg:w-full">
            <div className="hidden md:flex">
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="bg-blue-600 text-white px-2 py-1 hover:bg-blue-950 border"
              >
                Register
              </button>
              <button
                type="button"
                className="bg-white px-2 py-1 hover:bg-gray-100"
                onClick={() => setShowLogin(!showLogin)}
              >
                Login
              </button>
            </div>
          </div>
          <div className="md:hidden border">
            <button
              onClick={() => setShowLogin(!showLogin)}
              className="bg-blue-600 text-white px-3 py-1 hover:bg-blue-950"
            >
              Account
            </button>
          </div>
        </div>

        {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}
      </div>

      {/* Mobile Search Dropdown (only on small screens) */}
      <div
        className={`sm:hidden absolute top-0 left-0 w-full bg-white border-b shadow-md transform transition-transform duration-300 z-50 ${
          showMobileSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 outline-none  rounded-l"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="px-3  rounded-r"
            onClick={handleSearch}
          >
            <CiSearch size={20} />
          </button>
          <button
            onClick={() => setShowMobileSearch(false)}
            className="ml-2 text-gray-500 hover:text-red-600"
          >
            <IoClose  size={20} />
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-gray-800 sm:px-8 md:px-12 px-12">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 items-center py-4 gap-4">
          {/* Left: Categories Dropdown */}
          <div className="flex justify-start col-span-1">
            <CategoriesDropdown />
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden sm:flex sm:col-span-2 md:col-span-4 justify-center">
            <nav className="space-x-4">
              <NavLink
                to="/"
                className="text-white rounded-md text-sm font-medium transition duration-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className="text-white rounded-md text-sm font-medium transition duration-200"
              >
                Shop
              </NavLink>
            </nav>
          </div>

          {/* Right: Shopping Cart */}
          <div className="flex justify-start max-md:justify-end col-span-2 sm:col-span-1 text-white">
            {/* Mobile Icon */}
            <div className="flex sm:hidden">
              <button
                type="button"
                onClick={() => navigate("/shop")}
                className="text-white"
              >
                <BsFillBagPlusFill size={24} />
              </button>
            </div>

            {/* Desktop Button */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                type="button"
                onClick={() => navigate("/shop")}
                className="flex items-center text-sm"
              >
                <BsFillBagPlusFill size={20} />
                <span className="ml-2">ShopNow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;

