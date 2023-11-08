import React, { ReactNode } from 'react'

export function ButtonRed({ children }: { children: ReactNode }) {
    return (
        <button className='px-5 py-3 rounded-xl bg-[#5c1b33]'>
            <span className='text-sm lg:text-base font-semibold text-[#f0547d]'>{children}</span>
        </button>
    )
}

export function Button({ children }: { children: ReactNode }) {
    return (
        <button className='px-3 py-2 bg-[#000000]'>
            <span className='text-sm lg:text-base text-[#ffffff]'>{children}</span>
        </button>
    )
}

