import React from 'react'
import { suiteToolsData } from '@/utils/suiteToolsData'
import Card from './commons/Card'

function TokenSales() {
    return (
        <section className='flex flex-col w-full h-full items-center justify-center text-center gap-y-10 py-5'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7'>
                {
                    suiteToolsData.map((data, index) => (
                        <Card key={index} imageUrl={data.imageUrl} details={data.details} title={data.title} />
                    ))
                }
            </div>
        </section>
    )
}

export default TokenSales
