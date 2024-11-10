import Link from 'next/link';
import React from 'react';

export default function ProfileNav({ isClick }) {

    const navItems = [
        { name: "Profile", href: "/profile" },
        { name: "Settings", href: "/settings" },
        { name: "LogOut", href: "/" },
    ];

    return (
        <div className={` 
                ${!isClick ? "scale-y-0" : "scale-y-100"} 
                origin-top 
                duration-200 
                z-10 
                absolute 
                top-[130%] 
                ${isClick ? "md:right-0" : isClick ? "left-0" : "right-0"} 
                bg-gray-100  
                rounded-lg 
                shadow 
                 w-full md:w-44  
                dark:bg-gray-700 
            `}>

            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                {navItems.map((item, index) => (

                    <li key={index}>
                        <Link href={item.href} className="block font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            {item.name}
                        </Link>
                    </li>

                ))}
            </ul>


        </div>
    );
}
