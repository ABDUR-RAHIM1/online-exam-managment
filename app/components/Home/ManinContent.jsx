import React from 'react'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar'

export default function ManinContent() {
    return (
        <div className=' flex justify-between flex-wrap wrap '>
            <main className=' py-10 w-full md:w-[70%] border-0 md:border-r border-gray-400 pr-0 md:pr-4 '>
                <Main />
            </main>
            <aside className=' py-10 w-full md:w-[28%] '>
                <Sidebar />
            </aside>
        </div>
    )
}
