import { trendingData } from "@/utils/trendingData"
import { MdShowChart } from 'react-icons/md'
function TrendingHeader() {
    return (
        <div className='flex items-center justify-center text-center flex-wrap w-full mt-2 py-6 gap-x-3 text-black font-medium px-5'>
            <span className="text-lg flex items-center font-bold">Hot Coins&nbsp;<MdShowChart size={30} color="#43ff64d9" /></span>
            {trendingData.map((data, index) => (
                <div key={index}>
                    <span className="italic">{data.rank}</span>&nbsp;
                    <span className="italic text-[#24c077] font-semibold">{data.name}</span>
                </div>
            ))}
        </ div>
    )
}

export default TrendingHeader
