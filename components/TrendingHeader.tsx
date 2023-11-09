import { trendingData } from "@/utils/trendingData"
import { MdShowChart } from 'react-icons/md'
function TrendingHeader() {
    return (
        <div className='flex items-center xl:justify-center text-center overflow-x-auto w-full py-4 gap-x-3 text-black font-medium px-5 rounded-xl bg-red-200'>
            <span className="text-lg flex items-center font-bold">Trending Vaults&nbsp;<MdShowChart size={30} color="#43ff64d9" /></span>
            {trendingData.map((data, index) => (
                <div key={index}>
                    <span className="italic">{data.rank}</span>&nbsp;
                    <span className="text-[#30d74ed9] italic">{data.name}</span>
                </div>
            ))}
        </ div>
    )
}

export default TrendingHeader
