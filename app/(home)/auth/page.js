"use client"
import React, { useState } from 'react';


//  for user
const RegistrationPage = () => {
    const [isClick, setIsClick] = useState(false);
    const [formData, setFormData] = useState({
        courseCategory: '',
        name: '',
        email: '',
        password: '',
        collegeName: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

    };

    return (
        <div className="wrap">
            <h1 className="text-3xl font-bold text-center mb-6">
                {
                    isClick ? "Login" : "Registration"
                }
            </h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-2 md:px-5">
                {/* Course Category Field */}
                <div className="mb-4">
                    <label className="block text-gray-700">Course Category:</label>
                    <input
                        type="text"
                        name="courseCategory"
                        value={formData.courseCategory}
                        onChange={handleChange}
                        className="input"
                        required
                        placeholder='Category'
                    />
                </div>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input"
                        required
                        placeholder='Your Good Name'
                    />
                </div>

                {/* Conditional Fields */}
                {
                    isClick ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input"
                                    required
                                    placeholder='Email'
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Password:</label>
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
                        </>
                    ) : (
                        <>
                            {/* All fields shown when isClick is false */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input"
                                    required
                                    placeholder='Email'
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Password:</label>
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

                            <div className="mb-4">
                                <label className="block text-gray-700">Confirm Password:</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="input"
                                    required
                                    placeholder='******'
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">College Name:</label>
                                <input
                                    type="text"
                                    name="collegeName"
                                    value={formData.collegeName}
                                    onChange={handleChange}
                                    className="input"
                                    required
                                    placeholder='Your College Name'
                                />
                            </div>
                        </>
                    )
                }

                <button type="submit" className="bg-blue-500 my-6 font-bold text-white py-2 px-4 rounded hover:bg-blue-600">
                    Register
                </button>
            </form>
            <p className="text-center mt-4">
                {
                    isClick ? "I have no Account ?" : " Already have an account ? "
                }
                <span onClick={() => setIsClick(!isClick)} className="text-blue-500 hover:underline cursor-pointer">
                    {
                        isClick ? " Signup Here" : " Login Here"
                    }
                </span>
            </p>
        </div>

    );
};

export default RegistrationPage;
