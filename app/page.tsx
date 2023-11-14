import LaunchpoolProtocol from "@/components/LaunchpoolProtocol";
import TokenSales from "@/components/TokenSales";
import FadeAnimation from "@/components/commons/FadeAnimation";
import Banner from "@/components/Banner";
import TrendingHeader from "@/components/TrendingHeader";
const components = [Banner, LaunchpoolProtocol, TrendingHeader, TokenSales]

export default function Home() {
  return (
    <>
      <main className="absolute w-full right-0 top-[10vh] flex flex-col items-center bg-slate-100/50 justify-between">
        <div className="max-w-[110rem] px-[5%]">
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
