import React from 'react'
import { numbersData } from '@/utils/numbersData'
import NumberCard from './commons/NumberCard'

function LaunchpoolProtocol() {
    return (
        <section className='flex flex-col w-full h-full items-center justify-center text-center gap-y-10 py-5'>
            <div className="flex items-center justify-center gap-y-5 flex-wrap gap-x-5">
                {
                    numbersData.map((data, index) => (
                        <NumberCard key={index} title={data.title} number={data.number} />
                    ))
                }
            </div>
        </section>
    )
}

export default LaunchpoolProtocol
