"use client"
import { useState, useEffect } from 'react';

const Airdrop = () => {
    const [walletData, setWalletData] = useState<number | null>(null);
    const [bnbPrice, setBnbPrice] = useState<number | null>(null);
    const apiKey = '1A2NHBWPSSD9KUPM4T9WTJEC3YY46783IU';
    const walletAddress = '0xed0bAf3775255657310712bE4A6fc1564EEca9b7';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bnbPriceResponse = await fetch(
                    'https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT'
                );
                const bnbPriceData = await bnbPriceResponse.json();
                setBnbPrice(parseFloat(bnbPriceData.price));

                const walletResponse = await fetch(
                    `https://api.bscscan.com/api?module=account&action=balance&address=${walletAddress}&apikey=${apiKey}`
                );

                if (walletResponse.ok) {
                    const walletData = await walletResponse.json();
                    setWalletData(walletData.result);
                } else {
                    console.error('Failed to fetch wallet data');
                }
            } catch (error) {
                console.error('Error during fetch:', error);
            }
        };

        fetchData();
    }, [walletAddress, apiKey]);

    const balanceInUSD = walletData !== null && bnbPrice !== null ? (walletData / 1e18) * bnbPrice : null;

    return (
        <div className='flex flex-col gap-5 py-10 bg-white px-10 justify-center items-center rounded-lg'>
            <h1 className='text-lg 2xl:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>BNB Airdrop</h1>
            {walletData !== null && bnbPrice !== null ? (
                <div className='flex flex-col gap-5'>
                    <div className="rounded-xl p-[1px] shadow-md flex bg-gradient-to-r from-primary to-secondary text-base text-center items-center font-bold">
                        <div className="flex gap-x-2 items-center w-full justify-center bg-white p-3 rounded-xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-base 2xl:text-lg">${balanceInUSD}</span>
                        </div>
                    </div>
                    <span className='text-base 2xl:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>BNB: {walletData / 1e18}BNB</span>
                    <span className='text-sm lg:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Max Supply: 100 Billion</span>
                    <span className='text-sm lg:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Market Cap at Launch: $1000</span>
                </div>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
};

export default Airdrop;
