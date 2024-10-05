"use client";
import Link from "next/link";
import React from "react";

export default function DesktopNavbar() {
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
    <div className="flex justify-between items-center py-5 bg-gray-100 px-4 sticky top-0 z-[2000]">
      {/* Brand Logo */}
      <Link href="/" className="text-4xl italic font-bold hover:text-blue-500 duration-200">
        Online Exam
      </Link>

      {/* Desktop Navigation */}
      <nav className="flex items-center gap-6">
        <div className="relative group">
          <button className="group-hover:text-blue-500">
            Services
          </button>

          {/* Dropdown content */}
          <div className="transform scale-0 group-hover:scale-100 origin-top transition-transform duration-300 ease-in-out 
            absolute top-10 left-0 bg-gray-200 p-4 flex flex-col gap-4 z-[2] w-[200px]">
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
      </nav>
    </div>
  );
}
