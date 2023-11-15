import Image from 'next/image'
import React from 'react'

interface Props {
    imageUrl: string;
    title: string;
    details: string;
}

function Card({ imageUrl, title, details }: Props) {
    return (
        <div className='hover:shadow-lg dark:hover:shadow-md dark:hover:shadow-white flex flex-col gap-y-3 items-center justify-around text-center p-2 bg-white dark:bg-darkBg rounded-xl text-black/80 dark:text-white md:w-[200px] md:h-[250px] 2xlw-[250px] 2xl:h-[320px]'>
            <div className="flex items-center justify-center w-[4.8rem] 2xl:w-[5.5rem] h-[4.8rem] 2xl:h-[5.5rem] rounded-full border">
                <Image src={imageUrl} width={37} height={37} alt={title + "Image"} />
            </div>
            <h1 className='text-lg xl:text-xl font-semibold'>{title}</h1>
            <p className='text-sm 2xl:text-base font-medium'>{details}</p>
        </div>
    )
}

export default Card

