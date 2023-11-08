import React from 'react'
import HeadingText from './HeadingText'

type NumberCard = {
    number: string;
    title: string;
}

function NumberCard({ number, title }: NumberCard) {
    return (
        <div className='flex flex-col gap-y-3 items-center justify-center text-center bg-green-400/50 rounded-xl text-black/80 w-[220px] h-[170px]'>
            <HeadingText>{number}</HeadingText>
            <span className='text-base font-medium'>{title}</span>
        </div>
    )
}

export default NumberCard
