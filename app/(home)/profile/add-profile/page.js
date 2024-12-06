"use client"
import { postDataHandler } from '@/app/actions/users/postData';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const AddProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        photo: "",
        bio: '',
        contactNumber: '',
        address: '',
        skills: '',
        experience: '',
        jobPreferences: '',
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        // Split skills string into an array
        const skillsArray = formData.skills.split(',').map((skill) => skill.trim());

        const payload = {
            ...formData,
            skills: skillsArray,
        };

        try {

            const postApi = "/profile/update"
            const { status, result } = await postDataHandler(payload, "PUT", postApi);
            setIsLoading(false)
            status === 201 ? toast.success(result.message) : status === 400 ? toast.warning(result.message) : toast.error(result.message)
        } catch (error) {
            console.error('Error adding profile:', error);
            toast.error('Failed to add profile.');
        }
    };

    return (
        <div className='w-full bg-gray-50 py-10'>
            <div className="p-4 max-w-lg mx-auto shadow-xl ">
                <h2 className="text-xl font-semibold mb-4">Add Profile</h2>
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                    <div className="mb-4">
                        <label className="block font-medium">Profile Picture</label>
                        <input name="photo" type='file' onChange={handleChange} required className="input" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Bio</label>
                        <textarea name="bio" rows={5} value={formData.bio} onChange={handleChange} required className="input" />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium"> Contact Number</label>
                        <input type="number" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required className="input" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium"> Address</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} required className="input" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Skills (comma-separated)</label>
                        <input type="text" name="skills" value={formData.skills} onChange={handleChange} required className="input" />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium">Experience</label>
                        <input type="text" name="experience" value={formData.experience} onChange={handleChange} required className="input" />
                    </div>


                    <div className="mb-4">
                        <label className="block font-medium">Preferred Jobs</label>
                        <input type="text" name="jobPreferences" value={formData.jobPreferences} onChange={handleChange} required className="input" />
                    </div>

                    <button disabled={isLoading} type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">
                        {
                            isLoading ? "Loading . . ." : " Create Profile"
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProfile;
