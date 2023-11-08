import { trendingData } from "@/utils/trendingData"
import { MdShowChart } from 'react-icons/md'
function TrendingHeader() {
    return (
        <div className='flex items-center 2xl:justify-center text-center overflow-x-auto w-full py-4 gap-x-3 bg-black text-white font-medium'>
            <span className="text-sm lg:text-lg flex items-center"><MdShowChart size={30} color="#43ff64d9" />&nbsp;Trending</span>
            {trendingData.map((data, index) => (
                <div key={index}>
                    <span className="italic">{data.rank}</span>&nbsp;
                    <span className="text-[#43ff64d9] italic">{data.name}</span>
                </div>
            ))}
        </div>
    )
}

export default TrendingHeader
