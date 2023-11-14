import React from 'react'
import HeadingText from './HeadingText'

type NumberCard = {
    number: string;
    title: string;
}

function NumberCard({ number, title }: NumberCard) {
    return (
        <div className='flex flex-col gap-y-3 items-center justify-center text-center bg-white px-3 py-3 md:px-0 md:py-0 rounded-xl text-black/80 md:w-[170px] md:h-[110px] lg:w-[220px] lg:h-[170px]'>
            <span className='text-lg font-semibold'>{title}</span>
            <span className='text-lg font-semibold'>{number}</span>
        </div>
    )
}

export default NumberCard
