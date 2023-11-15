import { sidebarData } from "@/utils/sidebarData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isSideBarActive, setIsSideBarActive] = useState(false);

  return (
    <div
      className={`flex flex-col z-[201] w-[${isSideBarActive ? 10 : 5}vw] h-full justify-between gap-y-5 p-3 lg:p-5 xl:p-7 overflow-y-auto`}
      onMouseEnter={() => setIsSideBarActive(true)}
      onMouseLeave={() => setIsSideBarActive(false)}
    >
      {sidebarData.map((data, index) => (
        <Link
          className="flex items-center gap-x-3 text-sm lg:text-md dark:text-white"
          key={index}
          href={data.href}
        >
          <Image
            className="!min-w-[25px] !min-h-[25px]"
            src={data.iconUrl}
            width={25}
            height={25}
            alt={data.title}
          />
          {isSideBarActive && (
            <span className="text-black dark:text-white font-bold">{data.title}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
