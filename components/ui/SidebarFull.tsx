import { sidebarData } from "@/utils/sidebarData"
import Link from "next/link"

function SidebarFull() {
  return (
    <div className="flex flex-col h-[90vh] justify-between gap-y-5 py-7 px-2">
      {
        sidebarData.map((data, index) => (
          <Link className="flex items-center gap-x-2 text-sm lg:text-md" key={index} href={data.href}>
            <data.icon size={30} color="#43ff64d9" />
            <span className="text-[#43ff64d9] font-bold">{data.title}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default SidebarFull