"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"
import { AiOutlineMenuFold, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { GiChart } from 'react-icons/gi'
import { FaEthereum } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import Sidebar from "@/components/ui/Sidebar";
import SidebarFull from "@/components/ui/SidebarFull";

function Navbar() {
    const [isSideBarActive, setIsSideBarActive] = useState(false);
    const [isActive, setIsActive] = useState(false);
    function handleSideIconToggle() {
        setIsSideBarActive(!isSideBarActive);
    }
    function handleLinkToggle() {
        setIsActive(!isActive);
    }
    return (
        <>
            <header className="fixed top-0 flex w-full justify-between items-center p-4 z-[200] !h-[10vh] bg-[#000000]" style={{ backdropFilter: "10px" }}>
                <div className="flex gap-x-2 items-center">
                    <button onClick={handleSideIconToggle}>
                        {isSideBarActive ? <AiOutlineMenuFold size={25} color="#43ff64d9" /> : <AiOutlineMenu size={25} color="#43ff64d9" />}
                    </button>
                    <Link href='/' className="flex gap-x-2 items-center">
                        <Image className="border-2 border-red-500 rounded-full" src='/logo.png' alt="logo" width={45} height={45} />
                        <span className="font-semibold text-[#43ff64d9]">CryptoSale</span>
                    </Link>
                </div>
                <div className="hidden sm:flex gap-x-2 items-center">
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

                <div className="flex sm:hidden items-center justify-center">
                    <button onClick={handleLinkToggle}>
                        {isActive ? <AiOutlineClose size={30} color="#43ff64d9" /> : <BiMenuAltRight size={30} color="#43ff64d9" />}
                    </button>
                </div>

                {isActive && (
                    <div className="absolute top-[10vh] right-0 w-screen items-end justify-center flex flex-col gap-y-5 px-5 py-5 bg-black sm:hidden">
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
                )}
            </header>

            <aside className={`fixed top-[10vh] left-0 h-screen z-[200] bg-black overflow-y-scroll md:w-min`}>
                {isSideBarActive ? <SidebarFull /> : <Sidebar />}
            </aside>
        </>
    )
}
export default Navbar

