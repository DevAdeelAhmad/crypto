import Disclaimer from "@/components/Disclaimer";
import GrowingProtocol from "@/components/GrowingProtocol";
import LaunchpoolProtocol from "@/components/LaunchpoolProtocol";
import TokenSales from "@/components/TokenSales";
import TrendingHeader from "@/components/TrendingHeader";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full md:w-[92%] absolute top-[10vh] md:left-[8%] flex flex-col items-center justify-center">
        <TrendingHeader />
        <div className="max-w-7xl px-[5%]">
          <LaunchpoolProtocol />
          <TokenSales />
          <GrowingProtocol />
          <Disclaimer />
        </div>
      </main>
    </>
  )
}
