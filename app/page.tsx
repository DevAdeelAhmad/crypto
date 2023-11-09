import LaunchpoolProtocol from "@/components/LaunchpoolProtocol";
import TokenSales from "@/components/TokenSales";
import FadeAnimation from "@/components/commons/FadeAnimation";
import Navbar from "@/components/ui/Navbar";
import Banner from "@/components/Banner";
import TrendingHeader from "@/components/TrendingHeader";

const components = [Banner, LaunchpoolProtocol, TrendingHeader, TokenSales]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full md:w-[97%] left-0 md:left-[50px] absolute top-[10vh] flex flex-col items-center justify-between">
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
