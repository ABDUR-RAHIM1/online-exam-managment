import Heading from '@/app/helpers/Heading'
import React from 'react'

export default function Notice() {
    const notices = [
        { id: 1, title: 'Exam Date Announced', description: 'The final exam will be held on October 10th.', date: '2024-09-28' },
        { id: 2, title: 'Mock Test Results', description: 'Mock test results are available now.', date: '2024-09-15' },
        { id: 3, title: 'Exam Syllabus', description: 'Check the syllabus for the upcoming exam.', date: '2024-08-30' },
        { id: 4, title: 'Hall Ticket Download', description: 'Hall tickets are available for download.', date: '2024-08-25' }
    ];
    return (
        <div>
            <Heading text={"Notice Boards"} />

            <div className="overflow-x-auto">
                <table className="min-w-[700px] md:min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="text-left py-2 px-4">Title</th>
                            <th className="text-left py-2 px-4">Description</th>
                            <th className="text-left py-2 px-4">Date</th>
                            <th className="text-left py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notices.map((notice) => (
                            <tr key={notice.id} className="border-b hover:bg-gray-50">
                                <td className="py-2 px-4">{notice.title}</td>
                                <td className="py-2 px-4">{notice.description}</td>
                                <td className="py-2 px-4">{notice.date}</td>
                                <td className="py-2 px-4">
                                    <button className="text-blue-500 hover:underline mr-4">View</button> 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
