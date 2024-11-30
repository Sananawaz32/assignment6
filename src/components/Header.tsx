"use client"
import React, { useState } from "react";


import Image from 'next/image';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full">
            <div className="w-full h-[54px] flex items-center justify-between px-6 sm:px-10 bg-[#F7F7F7]">
                <span className="text-[14px] font-normal leading-[21px] sm:block hidden">
                    Phone: 956 742 455 678 | Email: info@ddsgnr.com
                </span>
                <div className="hidden sm:flex  gap-4">
                    <img src="/images/fb.png" alt="Facebook" className="w-6 h-6 cursor-pointer" /><img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" /><img src="/images/Twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
                    <img src="/images/LinkedIn.svg" alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
                </div>
            </div>
            <div className="w-full h-[1px] bg-black sm:block hidden"></div>

            <div className="w-full h-[50px] bg-[#F7F7F7] flex items-center justify-between px-4 sm:px-10 ">
                <Image src='/images/logo.png' alt="Logo" width={150} height={35} className="w-[120px] sm:w-[150px] h-[35px]" />
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-black">
                        
                    </button>
                </div>
                <div className="hidden sm:flex sm:items-center gap-6">
                <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Home
                </div>
                <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Courses
                </div>
                <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Services
                </div>
                <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Achievements
                </div>
                <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    About Us
                </div>
                <div className="cursor-pointer text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Testimonial
                </div>
                <button className="border border-black bg-white text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-100 ml-4">Login</button><button className="ml-2 hover:bg-gray-800 text-[14px] rounded-md px-3 py-1 text-white bg-black">Sign Up</button>
            </div>
        </div>
        <div className="w-full h-[1px] bg-black"></div>
        {menuOpen && (
            <div className="sm:hidden flex flex-col items-center bg-white w-full py-4 relative">
                <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-black">
                    
                </button>
                <div className="cursor-pointer text-black py-2 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Home
                </div>
                <div className="cursor-pointer text-black py-2 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Courses
                </div>
                <div className="cursor-pointer text-black py-2 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Services
                </div>
                <div className="cursor-pointer text-black py-2 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Achievements
                </div>
                <div className="cursor-pointer text-black py-2 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    About Us
                </div>
                <div className="cursor-pointer text-black py-2 px-3 rounded-md text-[14px] hover:bg-gray-200">
                    Testimonial
                </div>
                <button className="border border-black bg-white text-black py-1 px-3 rounded-md text-[14px] hover:bg-gray-100 mt-4 sm:block hidden">Login</button><button className="sm:block hidden mt-2 hover:bg-gray-800 text-[14px] rounded-md px-3 py-1 text-white bg-black">Sign Up</button>
            </div>
        )}
        </div>
    );
};

export default Header;