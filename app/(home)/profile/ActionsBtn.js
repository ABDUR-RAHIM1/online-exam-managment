"use client"
import { contextApi } from '@/app/contextApi/Context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function ActionsBtn({ data }) {
    const {setManageData } = useContext(contextApi);
    const router = useRouter()

    const handleEditProfile = () => {
        setManageData(data)
        router.push("/profile/add-profile")
        console.log("click")
    }

    return (
        <div>
            <button onClick={handleEditProfile} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Edit Profile</button>
            <button className="w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600 transition duration-200">Delete Account</button>
        </div>
    )
}
