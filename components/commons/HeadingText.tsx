import { ReactNode } from 'react'

function HeadingText({ children }: { children: ReactNode }) {
    return (
        <h1 className='text-xl lg:text-4xl font-semibold lg:font-bold text-black'>
            {children}
        </h1>
    )
}

export default HeadingText
