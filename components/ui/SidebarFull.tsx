import { sidebarData } from "@/utils/sidebarData"
import Link from "next/link"

function SidebarFull() {
  return (
    <div className="flex flex-col gap-y-5 py-7 px-2">
      {
        sidebarData.map((data, index) => (
          <Link className="flex items-center gap-x-2 text-sm" key={index} href={data.href}>
            <data.icon size={30} color="green" />
            <span className="text-white/80 font-semibold">{data.title}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default SidebarFull
