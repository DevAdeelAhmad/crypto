"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import { AiOutlineMenuFold, AiOutlineMenu } from 'react-icons/ai'
import { GiChart } from 'react-icons/gi'
import { FaEthereum } from 'react-icons/fa'
import Sidebar from "@/components/ui/Sidebar";
import SidebarFull from "@/components/ui/SidebarFull";

function Navbar() {
    const [isSideBarActive, setIsSideBarActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    function handleSideIconToggle() {
        setIsSideBarActive(!isSideBarActive);
    }
    return (
        <nav className="w-full fixed top-0 left-0 z-[200]">
            <header className="flex justify-between items-center p-4 border-b-[1px] !h-[10vh] bg-black/90 border-b-[#525252d9]" style={{ backdropFilter: "10px" }}>
                <div className="flex gap-x-2 items-center">
                    <button className="" onClick={handleSideIconToggle}>
                        {isSideBarActive ? <AiOutlineMenuFold size={25} color="#43ff64d9" /> : <AiOutlineMenu size={25} color="#43ff64d9" />}
                    </button>
                    <Link href='/' className="flex gap-x-2 items-center">
                        <Image className="border-2 border-red-500 rounded-full" src='/logo.png' alt="logo" width={45} height={45} />
                        <span className="font-semibold text-[#43ff64d9]">CryptoSale</span>
                    </Link>
                </div>
                <div className="flex gap-x-2 items-center">
                    <Link target="_blank" className="rounded-full px-3 py-2 text-white flex border-2 border-gray-700 gap-x-2 text-sm text-center items-center font-semibold" href='https://www.tradingview.com/'>
                        <GiChart size={25} color="#43ff64d9" />
                        TradingView
                    </Link>
                    <Link target="_blank" className="rounded-full px-3 py-2 text-white flex border-2 border-gray-700 gap-x-2 text-sm text-center items-center font-semibold" href=''>
                        <FaEthereum size={25} color="#43ff64d9" />
                        Network
                    </Link>
                    <Link className="rounded-full px-3 py-2 text-white border-2 bg-[#43ff64d9]/50 border-gray-700 gap-x-2 text-base text-center font-semibold" href='/connect'>
                        Connect
                    </Link>
                </div>
            </header>
            <aside className={`hidden md:block sticky !top-[80px] left-0 max-h-max !h-[90vh] overflow-y-scroll bg-black/90 ${isSideBarActive ? '!w-[170px]' : '!w-[60px]'}`} style={{ backdropFilter: "10px" }}>
                {isSideBarActive ? <SidebarFull /> : <Sidebar />}
            </aside>

        </nav>
    )
}
export default Navbar

