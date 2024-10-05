"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci"; // Importing a mobile menu icon
import { FaBookOpen } from "react-icons/fa";

export default function MobileNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle services dropdown

    const items = [
        {
            item: "Live Exam",
            path: "/live-exam",
        },
        {
            item: "Books",
            path: "/book-lists",
        },
    ];

    const subItems = [
        {
            item: "Bcs Exam",
            path: "/",
        },
        {
            item: "Bank Exam",
            path: "/",
        },
        {
            item: "University Exam",
            path: "/",
        },
        {
            item: "NTRC Exam",
            path: "/",
        },
    ];

    return (
        <div className="flex justify-between items-center py-5 bg-gray-100 px-4 sticky top-0 z-[9999]">
            {/* Brand Logo */}
            <Link href="/" className="text-4xl italic flex items-center gap-2 font-bold hover:text-blue-500 duration-200">
                <FaBookOpen className="text-blue-500" /> Online Exam
            </Link>

            {/* Desktop and Mobile Menu Toggle Button */}
            <div className="md:hidden">
                <CiMenuFries
                    className="text-3xl text-blue-500 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu on click
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="HomeNav hidden md:flex items-center gap-6">
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle services dropdown on click
                        className="focus:outline-none m-0 p-0"
                    >
                        Services
                    </button>

                    {/* Dropdown content with click toggle */}
                    <div
                        className={`${isDropdownOpen ? "max-h-60 scale-100" : "max-h-0 scale-0"
                            } overflow-hidden transform transition-all duration-300 ease-in-out 
                        absolute top-10 left-0 bg-gray-200 p-4 flex flex-col gap-4 z-[2] w-[200px] origin-top`}
                    >
                        {subItems.map((item, index) => (
                            <Link href={item.path} key={index} className="hover:text-blue-500">
                                {item.item}
                            </Link>
                        ))}
                    </div>
                </div>

                {items.map((item, index) => (
                    <Link href={item.path} key={index} className="hover:text-blue-500 duration-200">
                        {item.item}
                    </Link>
                ))}

                <Link href="/auth" className="hover:text-blue-500 duration-200">
                    Login/Sign up
                </Link>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-gray-100 p-6 flex flex-col items-start gap-4 md:hidden z-10">
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle services dropdown on mobile
                            className="focus:outline-none"
                        >
                            Services
                        </button>

                        {/* Dropdown content for mobile */}
                        <div
                            className={`${isDropdownOpen ? "max-h-60 scale-100" : "max-h-0 scale-0"
                                } overflow-hidden transform transition-all duration-300 ease-in-out mt-2 bg-gray-200 p-4 flex flex-col gap-4 origin-top`}
                        >
                            {subItems.map((item, index) => (
                                <Link href={item.path} key={index} className="hover:text-blue-500">
                                    {item.item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {items.map((item, index) => (
                        <Link href={item.path} key={index} className="hover:text-blue-500 duration-200">
                            {item.item}
                        </Link>
                    ))}

                    <Link href="/" className="hover:text-blue-500 duration-200">
                        Login/Sign up
                    </Link>
                </div>
            )}
        </div>
    );
}
