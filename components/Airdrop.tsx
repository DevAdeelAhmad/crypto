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
        <div>
            <h1>Wallet Assets</h1>
            {walletData !== null && bnbPrice !== null ? (
                <p>
                    Balance: {walletData / 1e18} BNB
                    <br />
                    Balance in USD: ${balanceInUSD}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Airdrop;
