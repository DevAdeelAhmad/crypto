"use client"
import Link from "next/link";
import { useState } from "react"
import { AiOutlineClose } from 'react-icons/ai'
import { GiChart } from 'react-icons/gi'
import { FaEthereum } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import Sidebar from "@/components/ui/Sidebar";
import { IoMenu } from "react-icons/io5";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    function handleLinkToggle() {
        setIsActive(!isActive);
    }
    function handleSideBarToggle() {
        setIsSidebarActive(!isActive);
    }
    return (
        <>
            <nav className="fixed top-0 bg-white right-0 w-full p-4 md:p-7 z-[200] flex items-center justify-between sm:justify-end">
                <Link onClick={handleSideBarToggle} href='#' className="flex sm:hidden">
                    <IoMenu size="30" />
                </Link>
                <div className="hidden sm:flex gap-x-2 items-center">
                    <Link target="_blank" className="rounded-xl px-3 py-3 flex border border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href='https://www.tradingview.com/'>
                        <GiChart size={25} color="#24c077" />
                        TradingView
                    </Link>
                    <Link target="_blank" className="rounded-xl px-3 py-3 flex border border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href=''>
                        <FaEthereum size={25} color="#24c077" />
                        Network
                    </Link>
                    <Link className="rounded-full px-10 py-3 text-white border shadow-lg bg-[#24c077] border-gray-500 gap-x-2 text-base text-center font-semibold" href='/connect'>
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
                        <Link target="_blank" className="rounded-xl px-3 py-3 flex border text-white border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href='https://www.tradingview.com/'>
                            <GiChart size={25} color="#24c077" />
                            TradingView
                        </Link>
                        <Link target="_blank" className="rounded-xl px-3 py-3 flex border text-white border-gray-500 gap-x-2 text-sm text-center items-center font-semibold" href=''>
                            <FaEthereum size={25} color="#24c077" />
                            Network
                        </Link>
                        <Link className="rounded-full px-10 py-3 border text-white shadow-lg bg-[#24c077] border-gray-500 gap-x-2 text-base text-center font-semibold" href='/connect'>
                            Connect
                        </Link>
                    </div>
                )}
            </nav>

            <aside className="hidden sm:fixed overflow-y-auto h-screen top-0 left-0 z-[201] sm:flex flex-col w-min border-r-[1px] border-l-gray-300 bg-white items-center justify-center">
                <Link href='/' className="flex gap-x-2 items-center">
                    <span className="font-bold text-base md:text-lg text-black">Crypto</span>
                </Link>
                <Sidebar />
            </aside >
        </>
    )
}
export default Navbar

