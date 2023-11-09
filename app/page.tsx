import Disclaimer from "@/components/Disclaimer";
import GrowingProtocol from "@/components/GrowingProtocol";
import LaunchpoolProtocol from "@/components/LaunchpoolProtocol";
import TokenSales from "@/components/TokenSales";
import TrendingHeader from "@/components/TrendingHeader";
import FadeAnimation from "@/components/commons/FadeAnimation";
import Navbar from "@/components/ui/Navbar";

const components = [LaunchpoolProtocol, TokenSales, Disclaimer]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full md:w-[97%] left-0 md:left-[50px] absolute top-[10vh] flex flex-col items-center justify-center">
        <TrendingHeader />
        <div className="max-w-7xl px-[5%]">
          {components.map((Component, index) => (
            <FadeAnimation key={index}>
              <Component />
            </FadeAnimation>
          ))}
        </div>
      </main>
    </>
  )
}
