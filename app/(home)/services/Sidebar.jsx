"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Sidebar() {
    const path = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const services = [
        { name: "Overview ", path: "/services" },
        { name: "BCS Job Preparation", path: "/services/bcs" },
        { name: "Bank Job Preparation", path: "/services/bank" },
        { name: "Government Job Circulars", path: "/services/govt-jobs" },
        { name: "Private Sector Jobs", path: "/services/private-jobs" },
        { name: "Interview Preparation", path: "/services/interview-prep" },
        { name: "Career Counseling", path: "/services/career-counseling" },
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
    };

    return (
        <div className=" relative h-screen overflow-y-auto md:w-[22%]">
            {/* Arrow button to open sidebar on mobile */}
            <span
                onClick={toggleSidebar}
                className="text-2xl z-[8888] fixed top-[5rem] left-0 cursor-pointer bg-blue-700 px-3 py-2 md:hidden flex items-center text-white"
            >
                Services
                <IoIosArrowForward className="cursor-pointer" />
            </span>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-[10] py-24 md:py-10 bg-blue-500 text-white p-4 transform transition-transform duration-300 md:relative md:translate-x-0 md:w-full h-screen ${sidebarOpen ? "translate-x-0 w-[60%] md:w-full" : "-translate-x-full"
                    }`}
            >


                <ul className="space-y-2 my-16">
                    {services.map((service, index) => (
                        <li key={index}>
                            <Link
                                href={service.path}
                                className={`block py-2 px-3 rounded hover:bg-blue-700 transition-colors duration-200 ${path === service.path ? "bg-blue-700" : ""
                                    }`}

                            >
                                {service.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
