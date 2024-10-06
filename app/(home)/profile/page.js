import { demoProfilePhoto } from '@/app/DemoData/DemoImg';
import Image from 'next/image';
import React from 'react';

export default function ProfileOverview() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Profile Overview</h1>

            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Left Column - User Info */}
                <div className="md:w-1/2">
                    {/* Profile Picture */}
                    <div className="flex items-center mb-4">
                        <Image
                            src={demoProfilePhoto}
                            width={200}
                            height={200}
                            alt="Profile"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <button className="bg-blue-500 text-white py-1 px-3 rounded-md">Upload New Picture</button>
                    </div>

                    {/* Profile Information */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
                        <div className="bg-gray-100 p-4 rounded-md">
                            <p className="font-medium">Name: <span className="font-normal">John Doe</span></p>
                            <p className="font-medium">Email: <span className="font-normal">johndoe@example.com</span></p>
                            <p className="font-medium">Phone: <span className="font-normal">+1234567890</span></p>
                        </div>
                    </div>

                    {/* Bio */}
                    <h2 className="text-xl font-semibold mb-2">Bio</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">Dedicated job seeker focusing on BCS and banking examinations. Committed to achieving success through thorough preparation and strategic planning.</p>
                    </div>

                    {/* Skills */}
                    <h2 className="text-xl font-semibold mb-2">Relevant Skills</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4 flex flex-wrap">
                        {['Analytical Skills', 'General Knowledge', 'Logical Reasoning', 'Verbal Ability'].map((skill, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{skill}</span>
                        ))}
                    </div>

                    {/* Experience */}
                    <h2 className="text-xl font-semibold mb-2">Preparation Experience</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-medium">Self-Studying for BCS Examination</p>
                        <p className="font-normal">January 2023 - Present</p>
                    </div>
                </div>

                {/* Right Column - Actions */}
                <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2">Actions</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Edit Profile</button>
                        <button className="w-full bg-red-500 text-white py-2 rounded-md mt-2 hover:bg-red-600 transition duration-200">Delete Account</button>
                    </div>

                    {/* Certifications */}
                    <h2 className="text-xl font-semibold mb-2">Certifications</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">Certified in Banking and Financial Services</p>
                    </div>

                    {/* Social Media Links */}
                    <h2 className="text-xl font-semibold mb-2">Social Media Links</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">LinkedIn: <a href="#" className="text-blue-500">linkedin.com/in/johndoe</a></p>
                    </div>

                    {/* Job Preferences */}
                    <h2 className="text-xl font-semibold mb-2">Job Preferences</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">Seeking opportunities in BCS and Bank jobs. Open to other government positions in Bangladesh.</p>
                    </div>

                    {/* Upcoming Exams */}
                    <h2 className="text-xl font-semibold mb-2">Upcoming Exams</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">BCS Preliminary Exam - Date: 2024-05-20</p>
                        <p className="font-normal">Bank Job Exam - Date: 2024-06-15</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
