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
            <nav className="fixed top-0 flex w-full justify-between items-center p-4 z-[200] !h-[10vh] bg-white border-b-[1px] border-b-[#24c077] shadow-lg shadow-[#24c077]">
                <div className="flex gap-x-2 items-center">
                    <button onClick={handleSideIconToggle}>
                        {isSideBarActive ? <AiOutlineMenuFold size={25} color="#24c077" /> : <AiOutlineMenu size={25} color="black" />}
                    </button>
                    <Link href='/' className="flex gap-x-2 items-center">
                        <Image className="border-2 border-black rounded-full" src='/logo.png' alt="logo" width={45} height={45} />
                        <span className="font-semibold text-black">CryptoSale</span>
                    </Link>
                </div>
                <div className="hidden sm:flex gap-x-2 items-center">
                    <Link target="_blank" className="rounded-full px-3 py-2 flex border shadow-lg border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href='https://www.tradingview.com/'>
                        <GiChart size={25} color="#24c077" />
                        TradingView
                    </Link>
                    <Link target="_blank" className="rounded-full px-3 py-2 flex border shadow-lg border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href=''>
                        <FaEthereum size={25} color="#24c077" />
                        Network
                    </Link>
                    <Link className="rounded-full px-3 py-2 text-white border shadow-lg bg-[#24c077] border-gray-500 gap-x-2 text-base text-center font-semibold" href='/connect'>
                        Connect
                    </Link>
                </div>

                <div className="flex sm:hidden items-center justify-center">
                    <button onClick={handleLinkToggle}>
                        {isActive ? <AiOutlineClose size={30} color="#24c077" /> : <BiMenuAltRight size={30} color="black" />}
                    </button>
                </div>

                {isActive && (
                    <div className="absolute top-[10vh] right-0 w-screen items-end justify-center flex flex-col gap-y-5 px-5 py-5 bg-black sm:hidden">
                        <Link target="_blank" className="rounded-full px-3 py-2 text-white flex border border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href='https://www.tradingview.com/'>
                            <GiChart size={25} color="#43ff64d9" />
                            TradingView
                        </Link>
                        <Link target="_blank" className="rounded-full px-3 py-2 text-white flex border border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href=''>
                            <FaEthereum size={25} color="#43ff64d9" />
                            Network
                        </Link>
                        <Link className="rounded-full px-3 py-2 text-white border bg-[#24c077] border-gray-500 gap-x-2 text-base text-center font-semibold" href='/connect'>
                            Connect
                        </Link>
                    </div>
                )}
            </nav>

            <aside className={`fixed top-[10vh] left-0 h-screen z-[200] bg-white overflow-y-scroll md:w-min shadow-xl`}>
                {isSideBarActive ? <SidebarFull /> : <Sidebar />}
            </aside>
        </>
    )
}
export default Navbar

