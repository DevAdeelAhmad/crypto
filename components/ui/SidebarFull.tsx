import { sidebarData } from "@/utils/sidebarData";
import Link from "next/link";

export default function SidebarFull() {
  return (
    <div className="flex flex-col z-[201] bg-white h-[90vh] justify-between gap-y-5 py-7 px-7">
      {sidebarData.map((data, index) => (
        <Link className="flex items-center gap-x-2 text-sm lg:text-md" key={index} href={data.href}>
          <data.icon size={30} color="black" />
          <span className="text-black font-bold">{data.title}</span>
        </Link>
      ))}
    </div>
  );
}