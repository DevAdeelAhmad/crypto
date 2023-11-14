import { sidebarData } from "@/utils/sidebarData";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  return (
    <div
      className="flex flex-col z-[201] !w-min justify-between gap-y-5 py-7 px-7"
      onMouseEnter={() => setIsSideBarActive(true)}
      onMouseLeave={() => setIsSideBarActive(false)}
    >
      {sidebarData.map((data, index) => (
        <Link className="flex items-center gap-x-2 text-sm lg:text-md" key={index} href={data.href}>
          <data.icon size={30} color="black" />
          {isSideBarActive && <span className="text-black font-bold">{data.title}</span>}
        </Link>
      ))}
    </div>
  );
}
