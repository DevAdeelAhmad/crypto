import { sidebarData } from "@/utils/sidebarData"
import Link from "next/link"

function Sidebar() {
  return (
    <div className="flex flex-col gap-y-5 py-7 px-2">
      {
        sidebarData.map((data, index) => (
          <Link key={index} href={data.href}>
            <data.icon size={30} color="white" />
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar
