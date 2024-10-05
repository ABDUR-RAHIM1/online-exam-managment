"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Sidebar() {
    const path = usePathname();
    console.log(path)
    const services = [
        { name: "Services", path: "/services" },
        { name: "BCS Job Preparation", path: "/services/bcs" },
        { name: "Bank Job Preparation", path: "/services/bank" },
        { name: "Government Job Circulars", path: "/services/govt-jobs" },
        { name: "Private Sector Jobs", path: "/services/private-jobs" },
        { name: "Interview Preparation", path: "/services/interview-prep" },
        { name: "Career Counseling", path: "/services/career-counseling" },
    ];
    return (
        <ul className="space-y-2 my-10">
            {services.map((service, index) => (
                <li key={index}>
                    <Link
                        href={service.path}
                        className={`block py-2 px-3 rounded hover:bg-blue-700 transition-colors duration-200 ${path === service.path ? "bg-blue-700" : ""}`}
                    >
                        {service.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
