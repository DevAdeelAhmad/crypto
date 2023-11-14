import Image from 'next/image'
import React from 'react'

interface Props {
    imageUrl: string;
    title: string;
    details: string;
}

function Card({ imageUrl, title, details }: Props) {
    return (
        <div className='flex flex-col gap-y-3 items-center justify-around text-center py-2 px-2
        bg-white rounded-xl text-black/80 md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[320px]'>
            <div className="flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-full border">
                <Image src={imageUrl} width={40} height={40} alt={title + "Image"} />
            </div>
            <h1 className='text-lg lg:text-2xl font-semibold'>{title}</h1>
            <p className='text-sm lg:text-base font-medium'>{details}</p>
        </div>
    )
}

export default Card

