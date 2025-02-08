"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegUser, FaShoppingCart, FaRegHeart, FaSearch, FaChevronDown, FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation"; 

const SecondHeader = () => {
  const [query, setQuery] = useState(""); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); 

  // Function to handle search
  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <header>
      {/* Main Navigation Bar */}
      <div className="bg-white shadow py-4">
        <div className="container mx-auto px-4 flex justify-between items-center text-lg w-full">
          <div className="flex items-center space-x-4">
            <Image src="/images/logo.png" alt="Logo" height={32} width={50} className="w-full h-full object-cover" />
            <h3 className="text-[#252B42] font-bold text-[24px] leading-8 tracking-[0.1px]">Furniro</h3>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden flex items-center">
            <FaBars 
              className="text-black cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>

          {/* Navigation Links */}
          <nav className={`sm:flex space-x-6 items-center ${isMobileMenuOpen ? 'block absolute top-16 left-0 w-full bg-white shadow-lg' : 'hidden sm:block'}`}>
            <Link href="/" className="block py-2 px-4 hover:text-blue-500 font-bold text-[14px] text-[#737373] tracking-[0.2px]">
              Home
            </Link>
            <Link href="/Shop" className="block py-2 px-4 hover:text-blue-500 font-bold text-[14px] text-[#737373] tracking-[0.2px]">
              Shop
            </Link>

            {/* Category Dropdown with Icon */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-blue-500 font-bold text-[14px] text-[#737373] tracking-[0.2px] focus:outline-none"> 
                <span>Categories</span>
                <FaChevronDown className="w-3 h-3 text-gray-500 group-hover:text-blue-500 transition-colors" />
              </button> 
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Link href="/Shop/LivingRoomFurniture" className="block px-4 py-2 hover:bg-gray-100">LivingRoomFurniture</Link>
                <Link href="/Shop/HomeDecor" className="block px-4 py-2 hover:bg-gray-100">HomeDecor</Link>
                <Link href="/Shop/BedroomFurniture" className="block px-4 py-2 hover:bg-gray-100">BedroomFurniture</Link>
                <Link href="/Shop/OutdoorFurniture" className="block px-4 py-2 hover:bg-gray-100">OutdoorFurniture</Link>
              </div>
            </div>

            <Link href="/Blog" className="block py-2 px-4 hover:text-blue-500 font-bold text-[14px] text-[#737373] tracking-[0.2px]">
              Blog
            </Link>
            <Link href="/Contact" className="block py-2 px-4 hover:text-blue-500 font-bold text-[14px] text-[#737373] tracking-[0.2px]">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative w-1/4 hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
              onClick={handleSearch}
            />
          </div>

          {/* Login/Register & Cart Options */}
          <div className="flex space-x-6 items-center text-sm text-black">
            <Link href="/login" className="flex items-center hover:text-black font-bold text-[14px] tracking-[0.2px]">
              <FaRegUser className="mr-1 h-5 w-5" />
            </Link>
            <Link href="/Cart" className="flex items-center hover:text-black font-bold text-[14px] tracking-[0.2px]">
              <FaShoppingCart className="hover:text-black cursor-pointer h-6 w-6" />
            </Link>
            <FaRegHeart className="hover:text-black cursor-pointer h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="sm:hidden block bg-white shadow-lg py-4">
          <Link href="/" className="block py-2 px-4 hover:text-blue-500">Home</Link>
          <Link href="/Shop" className="block py-2 px-4 hover:text-blue-500">Shop</Link>
          <Link href="/Blog" className="block py-2 px-4 hover:text-blue-500">Blog</Link>
          <Link href="/Contact" className="block py-2 px-4 hover:text-blue-500">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default SecondHeader;
