"use client"
import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function Slider() {
    const slideImages = [
        {
            url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 1'
        },
        {
            url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
            caption: 'Slide 2'
        },
        {
            url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
            caption: 'Slide 3'
        },
    ];

    return (
        <div className=" w-full  z-[-1]">
            <Fade>
                {slideImages.map((fadeImage, index) => (
                    <div key={index} className='z-[-1] h-[80vh]'>
                        <img style={{ width: '100%' }} className='z-[1] object-cover' src={fadeImage.url} />
                        <h2>{fadeImage.caption}</h2>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
