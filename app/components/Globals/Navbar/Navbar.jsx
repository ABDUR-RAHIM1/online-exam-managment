"use client";
import { demoProfilePhoto } from "@/app/DemoData/DemoImg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import ProfileNav from "./ProfileNav";

export default function MobileNavbar() {
    const path = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfile, setIsProfile] = useState(false)

    const handleProfileClick = () => {
        setIsProfile(!isProfile)
    }

    const items = [
        {
            item: "Services",
            path: "/services",
        },
        {
            item: "Live Exam",
            path: "/live-exam",
        },
        {
            item: "Books",
            path: "/book-lists",
        },
        {
            item: "Login/Signup",
            path: "/auth",
        },
    ];



    return (
        <div className=" px-5 md:px-10 flex justify-between items-center py-5 bg-gray-100   sticky top-0 z-[9999] w-full ">
            {/* Brand Logo */}
            <Link href="/" className=" text-3xl md:text-4xl italic flex items-center gap-2 font-bold hover:text-blue-500 duration-200">
                <FaBookOpen className="text-blue-500" /> Online Exam
            </Link>

            {/* Desktop and Mobile Menu Toggle Button */}
            <div className="md:hidden">
                <RiMenuFold3Fill
                    className="text-4xl text-blue-500 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu on click
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="HomeNav hidden md:flex items-center gap-6">


                {items.map((item, index) => (
                    <Link href={item.path} key={index} className={` hover:text-blue-500 duration-200 ${path.includes(item.path) ? "text-blue-500" : ""}`}>
                        {item.item}
                    </Link>
                ))}

                <div onClick={handleProfileClick} className=" cursor-pointer relative text-xl font-medium hover:text-blue-500 duration-200">
                    <Image
                        src={demoProfilePhoto}
                        width={200}
                        height={200}
                        alt="profile photo"
                        className="w-12 h-12 rounded-full hover:rotate-6 duration-200"
                    />
                    <ProfileNav isClick={isProfile} />
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-gray-100 p-6 flex flex-col items-start gap-4 md:hidden z-10">


                    {items.map((item, index) => (
                        <Link href={item.path} key={index} className={` text-xl font-medium hover:text-blue-500 duration-200 ${path.includes(item.path) ? "text-blue-500" : ""}`}>
                            {item.item}
                        </Link>
                    ))}

                    <div onClick={handleProfileClick} className="w-full cursor-pointer relative text-xl font-medium hover:text-blue-500 duration-200">
                        <Image
                            src={demoProfilePhoto}
                            width={200}
                            height={200}
                            alt="profile photo"
                            className="w-12 h-12 rounded-full hover:rotate-6 duration-200"
                        />
                        <ProfileNav isClick={isProfile} />
                    </div>
                </div>
            )}
        </div>
    );
}
