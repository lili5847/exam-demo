import { useState } from "react";

function CategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-white flex items-center"
      >
        Categories
        <svg
          className={`ml-10 w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-10 w-48">
          <ul className="text-black">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Electronics</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Clothing</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home Appliances</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoriesDropdown;
