import React from 'react'
import HeadingText from './commons/HeadingText'
import DescriptionText from './commons/DescriptionText'
import { growingProtocolData } from '@/utils/growingProtocolData'
import Card from './commons/Card'

function GrowingProtocol() {
    return (
        <section className='w-full text-center flex items-center justify-center flex-col py-20 gap-y-10'>
            <HeadingText>
                A Growing Protocol Ecosystem.
            </HeadingText>
            <DescriptionText>
                We build a suite of tools for the world of decentralized finance. PinkMoon, PinkSale, PinkElon PinkLock, PinkSwap, we Pink everything!
            </DescriptionText>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-7'>
                {
                    growingProtocolData.map((data, index) => (
                        <Card key={index} imageUrl={data.imageUrl} details={data.details} title={data.title} />
                    ))
                }
            </div>


        </section>
    )
}

export default GrowingProtocol
