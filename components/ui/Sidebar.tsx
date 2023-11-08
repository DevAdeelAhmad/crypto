import { sidebarData } from "@/utils/sidebarData"
import Link from "next/link"

function Sidebar() {
  return (
    <div className="flex flex-col gap-y-5 py-7 px-2">
      {
        sidebarData.map((data, index) => (
          <Link className="hidden md:flex items-center gap-x-2 text-sm" key={index} href={data.href}>
            <data.icon size={30} color="#43ff64d9" />
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar
