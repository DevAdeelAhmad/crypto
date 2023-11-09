import React, { ReactNode } from 'react'
import { BsChevronDown, BsArrowUpRight } from 'react-icons/bs'
import { FaBtc } from 'react-icons/fa'

function Dropdown() {
    return (
        <section className='flex flex-col gap-y-3 py-2'>
            <DropdownItem>24h % change</DropdownItem>
            <div className="flex gap-x-3">
                <DropdownItem>All</DropdownItem>
                <input className='w-full text-sm bg-[#e5e5e5] px-5 rounded-xl' type="text" placeholder='Find by name or pair address' />
            </div>
            <div className="flex flex-col gap-y-2">
                <SingleTradingPair title='BTCUSDTPERP' change='30.1%' price='37112.54' />
                <SingleTradingPair title='ETHUSDTPERP' change='30.1%' price='37112.54' />
                <SingleTradingPair title='XRPUSDTPERP' change='30.1%' price='37112.54' />
                <SingleTradingPair title='FILUSDTPERP' change='30.1%' price='37112.54' />
                <SingleTradingPair title='AXSUSDTPERP' change='30.1%' price='37112.54' />
                <SingleTradingPair title='BNBUSDTPERP' change='30.1%' price='37112.54' />
            </div>
        </section>
    )
}

export default Dropdown

function DropdownItem({ children }: { children: ReactNode }) {
    return (
        <div className='flex items-center justify-between rounded-xl gap-x-3 py-2 px-2 bg-[#e5e5e5]'>
            <span>{children}</span>
            <BsChevronDown color="#454545" size={20} />
        </div>
    )
}

function SingleTradingPair({ title, change, price }: { title: string, change: string, price: string }) {
    return (
        <div className='flex items-center justify-between gap-x-4 py-2 px-2 bg-[#e5e5e5] rounded-lg'>
            <div className='flex gap-x-2'>
                <FaBtc size={20} />
                <span>{title}</span>
            </div>
            <div className='flex gap-x-2'>
                <span className='flex'><BsArrowUpRight color="#24c077" size={20} />&nbsp;{change}</span>
                <span>${price}</span>
            </div>
        </div>
    )
}