import React from 'react'
import { numbersData } from '@/utils/numbersData'
import NumberCard from './commons/NumberCard'

function LaunchpoolProtocol() {
    return (
        <section className='flex flex-col w-full h-full items-center justify-center text-center gap-y-10 py-5'>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-7">
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
