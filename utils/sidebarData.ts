import {
  AiOutlineHome,
  AiFillUnlock,
  AiOutlineDollarCircle,
  AiOutlineCrown,
  AiOutlineSafetyCertificate,
  AiOutlineSend,
  AiOutlineLineChart,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RiGitRepositoryPrivateLine, RiTwitterXFill } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { LiaDiscord } from "react-icons/lia";
import { SiGoogledocs } from "react-icons/si";

export const sidebarData = [
  {
    title: "Home",
    icon: AiOutlineHome,
    href: "/",
  },
  {
    title: "Launchpads",
    icon: HiOutlineRocketLaunch,
    href: "/launchpad",
  },
  {
    title: "Private Sale",
    icon: RiGitRepositoryPrivateLine,
    href: "/private-sale",
  },
  {
    title: "PinkLock",
    icon: AiFillUnlock,
    href: "/pink-lock",
  },
  {
    title: "AirDrop",
    icon: BiPackage,
    href: "/air-drop",
  },
  {
    title: "Buy Crypto",
    icon: AiOutlineDollarCircle,
    href: "/buy",
  },
  {
    title: "Leaderboard",
    icon: AiOutlineCrown,
    href: "/leaderboard",
  },
  {
    title: "Anti-Bot",
    icon: AiOutlineSafetyCertificate,
    href: "/anti-bot",
  },
  {
    title: "Multi-Sender",
    icon: AiOutlineSend,
    href: "/multi-sender",
  },
  {
    title: "dex-view.com",
    icon: AiOutlineLineChart,
    href: "https://www.dexview.com/",
  },
  {
    title: "Shop",
    icon: AiOutlineShoppingCart,
    href: "/shop",
  },
  {
    title: "Docs",
    icon: SiGoogledocs,
    href: "/docs",
  },
  {
    title: "Facebook",
    icon: AiOutlineFacebook,
    href: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    icon: AiOutlineInstagram,
    href: "https://www.instagram.com/",
  },
  {
    title: "X/Twitter",
    icon: RiTwitterXFill,
    href: "https://www.x.com/",
  },
  {
    title: "Discord",
    icon: LiaDiscord,
    href: "https://www.discord.com/",
  },
];
