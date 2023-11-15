"use client"
import Link from "next/link";
import { useState } from "react"
import { AiOutlineClose } from 'react-icons/ai'
import { GiChart } from 'react-icons/gi'
import { FaEthereum } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import Sidebar from "@/components/ui/Sidebar";
import { IoMenu } from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwithcher";

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
            <nav className="fixed top-0  bg-white dark:bg-dark right-0 w-full p-4 2xl:p-7 z-[200] flex items-center justify-between sm:justify-end">
                <Link onClick={handleSideBarToggle} href='#' className="flex sm:hidden">
                    <IoMenu size="30" color="#ffa402" />
                </Link>
                <div className="hidden sm:flex gap-x-2 items-center">
                    <ThemeSwitcher />
                    <Link target="_blank" className="rounded-xl p-[1px] shadow-md flex bg-gradient-to-r from-primary to-secondary dark:from-darkP dark:to-darkS text-base text-center items-center font-bold" href='https://www.tradingview.com/'>
                        <div className="flex gap-x-2 items-center bg-white dark:bg-dark p-2 2xl:p-3 rounded-xl">
                            <GiChart size={25} color="#ffa402" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-darkP dark:to-darkS">TradingView</span>
                        </div>
                    </Link>
                    <Link target="_blank" className="rounded-xl p-[1px] shadow-md flex bg-gradient-to-r from-primary to-secondary dark:from-darkP dark:to-darkS text-base text-center items-center font-bold" href='https://www.tradingview.com/'>
                        <div className="flex gap-x-2 items-center bg-white dark:bg-dark p-2 2xl:p-3 rounded-xl">
                            <FaEthereum size={25} color="#ffa402" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-darkP dark:to-darkS">Network</span>
                        </div>
                    </Link>
                    <Link className="rounded-full px-7 py-2 2xl:px-10 2xl:py-3 text-white shadow-lg bg-gradient-to-r from-primary to-secondary dark:from-darkP dark:to-darkS border-gray-500 gap-x-2 text-base text-center font-semibold" href='/connect'>
                        Connect
                    </Link>
                </div>

                <div className="flex sm:hidden items-center justify-center">
                    <button onClick={handleLinkToggle}>
                        {isActive ? <AiOutlineClose size={30} color="#ffa402" /> : <BiMenuAltRight size={30} color="#ffa402" />}
                    </button>
                </div>

                {isActive && (
                    <div className="absolute top-[7vh] right-0 w-screen items-end justify-center flex flex-col gap-y-5 px-5 py-5 bg-gradient-to-r from-primary to-secondary sm:hidden">
                        <Link target="_blank" className="rounded-xl p-[1px] shadow-md flex bg-gradient-to-r from-primary to-secondary text-base text-center items-center font-bold" href='https://www.tradingview.com/'>
                            <div className="flex gap-x-2 items-center bg-white p-3 rounded-xl">
                                <GiChart size={25} color="#ffa402" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">TradingView</span>
                            </div>
                        </Link>
                        <Link target="_blank" className="rounded-xl p-[1px] shadow-md flex bg-gradient-to-r from-primary to-secondary text-base text-center items-center font-bold" href='https://www.tradingview.com/'>
                            <div className="flex gap-x-2 items-center bg-white p-3 rounded-xl">
                                <FaEthereum size={25} color="#ffa402" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Network</span>
                            </div>
                        </Link>
                        <Link className="rounded-full px-10 py-3 text-white shadow-lg bg-primary border-gray-500 gap-x-2 text-base text-center font-semibold" href='/connect'>
                            Connect
                        </Link>
                    </div>
                )}
            </nav>

            <aside className="hidden sm:fixed overflow-y-auto h-screen top-0 left-0 z-[201] sm:flex flex-col w-min border-r-[1px] bg-white dark:bg-dark items-center justify-center py-10">
                <Link href='/' className="flex gap-x-2 items-center">
                    <span className="font-bold text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-darkP dark:to-darkS">Crypto</span>
                </Link>
                <Sidebar />
            </aside >
        </>
    )
}
export default Navbar

