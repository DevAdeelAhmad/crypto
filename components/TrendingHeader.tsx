import { trendingData } from "@/utils/trendingData"
import { BsChevronDoubleUp } from 'react-icons/bs'
import Image from "next/image"
export default function TrendingHeader() {
    return (
        <div className='flex items-center justify-center text-center flex-wrap w-full mt-2 py-6 gap-x-4 text-black font-semibold uppercase text-lg lg:text-xl px-5'>
            {trendingData.map((data, index) => (
                <div className="flex gap-x-1 items-center justify-center" key={index}>
                    <span>{data.rank}</span>&nbsp;
                    <BsChevronDoubleUp size="32" />
                    <Image src={data.imageUrl} alt={data.name} width={32} height={32} />
                    <span>{data.name}</span>
                </div>
            ))
            }
        </ div >
    )
}

