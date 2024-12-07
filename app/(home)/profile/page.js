
import { getDataHandler } from '@/app/actions/users/getData';
import NotFound from '@/app/components/Globals/NotFound';
import { demoProfilePhoto } from '@/app/DemoData/DemoImg';
import Image from 'next/image';
import React from 'react';
import ActionsBtn from './ActionsBtn';

export default async function ProfileOverview() {
    const api = "/user/me";
    const { status, result } = await getDataHandler(api);

    // Handle errors and missing user data
    if (status !== 200 || !result) {
        return <NotFound page={"user"} />;
    }

    // Destructure user data
    const { username, email, createdAt, profile, courses } = result;
    const { bio, photo, contactNumber, address, skills, experience, jobPreferences } = profile;




    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Profile Overview</h1>

            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Left Column - User Info */}
                <div className="md:w-1/2">
                    {/* Profile Picture */}
                    <div className="flex items-center mb-4">
                        <Image
                            src={photo || demoProfilePhoto}  // Conditional rendering
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
                            <p className="font-medium">Name: <span className="font-normal">{username || "N/A"}</span></p>
                            <p className="font-medium">Email: <span className="font-normal">{email || "N/A"}</span></p>
                            <p className="font-medium">Contact: <span className="font-normal">{contactNumber || "N/A"}</span></p>
                            <p className="font-medium">Address: <span className="font-normal">{address || "N/A"}</span></p>
                            <p className="font-medium">Joined: <span className="font-normal">{new Date(createdAt).toLocaleDateString() || "N/A"}</span></p>
                        </div>
                    </div>

                    {/*  profile information from datasbase */}

                    {/* Bio */}
                    <h2 className="text-xl font-semibold mb-2">Bio</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">
                            {bio || "N?A"}
                        </p>
                    </div>

                    {/* Skills */}
                    <h2 className="text-xl font-semibold mb-2">Relevant Skills</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4 flex flex-wrap">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-blue-200 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">{skill}</span>
                        ))}
                    </div>

                    {/* Experience */}
                    <h2 className="text-xl font-semibold mb-2">Preparation Experience</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-medium">{experience || "N?A"}</p>
                    </div>
                </div>

                {/* Right Column - Actions */}
                <div className="md:w-1/2">
                    <h2 className="text-xl font-semibold mb-2">Actions</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <ActionsBtn data={result.profile} />
                    </div>

                    {/* Certifications */}
                    <h2 className="text-xl font-semibold mb-2">Certifications</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">Certified in Banking and Financial Services</p>
                    </div>


                    {/* Job Preferences */}
                    <h2 className="text-xl font-semibold mb-2">Job Preferences</h2>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="font-normal">
                            {
                                jobPreferences || "N?A"
                            }
                        </p>
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
