"use client"
import { AuthPostHandler } from '@/app/Handler/usersHandler/PostHandler';
import useToken from '@/app/hooks/useToken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// login / registration page
const RegistrationPage = () => {
    const [loading, setLoading] = useState(false)
    const [isClick, setIsClick] = useState(false);
    const router = useRouter();
    const token = useToken();

    useEffect(() => {
        if (token) {
            toast.info("Yoy Have Already Logged in!")
            setTimeout(() => {
                router.push("/profile")
            }, 1500);
        }
    }, [token])

    const [formData, setFormData] = useState({
        username: "",
        email: '',
        password: '',
        accountType: 'free',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const registerApi = "/user/register";
        const loginApi = "/user/login";

        try {
            // Login or register based on `isClick` state
            const response = await AuthPostHandler(formData, isClick ? loginApi : registerApi);

            // Check if login was successful
            if (response.status === 200) {
                // Set token only for login
                if (isClick) {  // `isClick` true হলে, এটা login ফর্ম
                    Cookies.set("userToken", response.data.token);
                    router.refresh()
                    router.push('/profile');
                } else {
                    toast.success("Registration successful! Please log in.");
                    setIsClick(true);  // Redirect to login form after registration
                }
            } else {
                toast.error(response.message || "Operation failed!");
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred!");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
                    {isClick ? "Login" : "Sign Up"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isClick &&
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className='input'
                                required
                                placeholder='Enter your Username'
                            />
                        </div>}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='input'
                            required
                            placeholder='Enter your email'
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input"
                            required
                            placeholder='******'
                        />
                    </div>

                    <button
                        type="submit"
                        className="loginBtn"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : (isClick ? "Login" : "Signup")}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    {isClick ? "Don't have an account?" : "Already have an account?"}
                    <span
                        onClick={() => setIsClick(!isClick)}
                        className="text-blue-500 hover:underline cursor-pointer ml-2"
                    >
                        {isClick ? "Sign Up Here" : "Login Here"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;
