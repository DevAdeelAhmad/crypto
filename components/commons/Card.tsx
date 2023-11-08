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
        bg-green-400/50 rounded-xl text-black/80 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]'>
            <Image src={imageUrl} width={80} height={80} alt={title + "Image"} />
            <h1 className='text-lg lg:text-2xl font-semibold'>{title}</h1>
            <p className='text-sm lg:text-base font-medium'>{details}</p>
        </div>
    )
}

export default Card
