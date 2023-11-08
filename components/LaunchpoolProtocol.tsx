import React from 'react'
import HeadingText from '@/components/commons/HeadingText'
import DescriptionText from '@/components/commons/DescriptionText'
import { ButtonRed } from '@/components/commons/Button'
import { numbersData } from '@/utils/numbersData'
import NumberCard from './commons/NumberCard'

function LaunchpoolProtocol() {
    return (
        <section className='flex flex-col w-full h-full items-center justify-center text-center gap-y-10 py-20'>
            <HeadingText>
                The Launchpad Protocol for Everyone!
            </HeadingText>
            <DescriptionText>
                CryptoSale helps everyone to create their own tokens and token sales in few seconds.<br />
                Tokens created on CryptoSale will be verified and published on explorer websites.
            </DescriptionText>
            <div className='flex gap-x-2 lg:gap-x-5'>
                <ButtonRed>Join Now</ButtonRed>
                <ButtonRed>Learn More</ButtonRed>
            </div>
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
