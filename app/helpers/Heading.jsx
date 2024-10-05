import React from 'react'

export default function Heading({ text }) {
    return (
        <h2 className=' text-2xl md:text-4xl font-bold my-5'>
            {text || "Heading missing!"}
        </h2>
    )
}
