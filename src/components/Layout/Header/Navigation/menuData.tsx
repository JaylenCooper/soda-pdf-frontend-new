import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Features", href: "#home-section", isAccent: true},
  { label: "Online Tools", href: "#about-section", isAccent: false, submenu: [
    { label: "Free", href: "#features-free" },
    { label: "Most Popular", href: "#features-popular" },
    { label: "Essential", href: "#features-essential" },
    { label: "Advanced & Services", href: "#features-advanced" }, 
  ]},
  { label: "Pricing", href: "#cook-section", isAccent: false},
  { label: "Support", href: "/documentation", isAccent: false},
];
