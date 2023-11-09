import React from 'react'
import HeadingText from './commons/HeadingText'
import DescriptionText from './commons/DescriptionText'
import { suiteToolsData } from '@/utils/suiteToolsData'
import Card from './commons/Card'

function TokenSales() {
    return (
        <section className='flex flex-col w-full h-full items-center justify-center text-center gap-y-10 py-5'>
            <HeadingText>
                A Suite of Tools for Token Sales.
            </HeadingText>
            <DescriptionText>
                A suite of tools were built to help you create your own tokens and launchpads in a fast, simple and cheap way, with no prior code knowledge required and 100% decentralized!
            </DescriptionText>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-7'>
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
