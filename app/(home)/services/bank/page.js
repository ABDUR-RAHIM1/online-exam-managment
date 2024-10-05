import Heading from '@/app/helpers/Heading';
import React from 'react';

export default function BankPage() {

    const BankDemoData = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1,
        category: `Bank Category ${index + 1}`,
        price: `৳${(index + 3) * (index + 1) * 1000}`,
        duration: `${index + 2} months`,
        description: `This is a brief description for Bank Category ${index + 1}. It covers essential topics for Bank exam preparation.`,
        availableSeats: 50 - index * 5,
        startDate: `2024-0${index + 2}-01`,
        instructor: `Instructor ${String.fromCharCode(65 + index)}`,
        rating: (4.5 - index * 0.5).toFixed(1),
    }));

    return (
        <div className="px-4 py-8">
            <Heading text={"Bank Courses"} center={true} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {BankDemoData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.category}</h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-gray-700 font-bold mb-1">Price: <span className="text-blue-600">{item.price}</span></p>
                        <p className="text-gray-700 mb-1">Duration: {item.duration}</p>
                        <p className="text-gray-700 mb-1">Available Seats: {item.availableSeats}</p>
                        <p className="text-gray-700 mb-1">Start Date: {item.startDate}</p>
                        <p className="text-gray-700 mb-1">Instructor: {item.instructor}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-yellow-500 font-bold">Rating: {item.rating}</span>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enroll Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
