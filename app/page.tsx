import Disclaimer from "@/components/Disclaimer";
import GrowingProtocol from "@/components/GrowingProtocol";
import LaunchpoolProtocol from "@/components/LaunchpoolProtocol";
import TokenSales from "@/components/TokenSales";
import TrendingHeader from "@/components/TrendingHeader";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <TrendingHeader />
      <div className="max-w-7xl px-[5%]">
        <LaunchpoolProtocol />
        <TokenSales />
        <GrowingProtocol />
        <Disclaimer />
      </div>
    </main>
  )
}
