import Image from "next/image";
import { BsChevronDoubleUp } from "react-icons/bs";
const TrendingHeader = () => {
    return (
        <div suppressHydrationWarning className="banner">
            <p className="marquee uppercase">
                <h1 className="text-base 2xl:text-lg text-black  dark:text-white font-semibold inline-block">&emsp;&emsp;
                    #1 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/btc.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BTCUSDT&emsp;
                    #2 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/eth.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;ETHUSDT&emsp;
                    #3 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/axs.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BXRPUSDT&emsp;
                    #4 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/doge.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;AXSUSDT&emsp;
                    #5 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/btc.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;FILUSDT&emsp;
                    #6 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/eth.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BGBUSDT&emsp;
                    #7 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/axs.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BNBUSDT&emsp;
                    &emsp;&emsp;
                </h1>
            </p>
            <p className="marquee marquee2 uppercase">
                <h1 className="text-base 2xl:text-lg text-black dark:text-white font-semibold inline-block">&emsp;&emsp;
                    #1 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/btc.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BTCUSDT&emsp;
                    #2 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/eth.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;ETHUSDT&emsp;
                    #3 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/axs.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BXRPUSDT&emsp;
                    #4 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/doge.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;AXSUSDT&emsp;
                    #5 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/btc.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;FILUSDT&emsp;
                    #6 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/eth.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BGBUSDT&emsp;
                    #7 &nbsp;<BsChevronDoubleUp size="20" className="inline-block" />&nbsp;<Image className="inline-block" src='/trending/axs.svg' width={20} height={20} alt="TrendingPair Img" />&nbsp;BNBUSDT&emsp;
                    &emsp;&emsp;
                </h1>
            </p>
        </div >
    );
};

export default TrendingHeader;
