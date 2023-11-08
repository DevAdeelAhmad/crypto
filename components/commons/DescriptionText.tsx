import { ReactNode } from 'react'

function DescriptionText({ children }: { children: ReactNode }) {
    return (
        <p className='text-sm lg:text-base font-medium text-black'>
            {children}
        </p>
    )
}

export default DescriptionText
