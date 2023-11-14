import React from 'react'
import { suiteToolsData } from '@/utils/suiteToolsData'
import Card from './commons/Card'
import Dropdown from '@/components/Dropdown'
import Airdrop from '@/components/Airdrop'

function TokenSales() {
    return (
        <section className='flex flex-col xl:flex-row items-center justify-center w-full h-full text-center gap-x-10 gap-y-10 py-5'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-5'>
                {
                    suiteToolsData.map((data, index) => (
                        <Card key={index} imageUrl={data.imageUrl} details={data.details} title={data.title} />
                    ))
                }
            </div>
            <div className='flex flex-col md:flex-col gap-5'>
                <Dropdown />
                <Airdrop />
            </div>
        </section>
    )
}

export default TokenSales
