import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const convertFromPdf = [
  { label: "PDF to Word", href: "#" },
  { label: "PDF to Excel", href: "#" },
  { label: "PDF to JPG", href: "#" },
  { label: "PDF to PPT", href: "#" },
];

const convertToPdf = [
  { label: "Word to PDF", href: "#" },
  { label: "Excel to PDF", href: "#" },
  { label: "PPT to PDF", href: "#" },
  { label: "TXT to PDF", href: "#" },
];

const viewEdit = [
  { label: "PDF Editor", href: "#" },
  { label: "PDF Reader", href: "#" },
  { label: "E-Sign PDF", href: "#" },
];

const signSecure = [
  { label: "Electronic Signature", href: "#" },
  { label: "Protect PDF", href: "#" },
  { label: "Unlock PDF", href: "#" },
];

const managePDFFiles = [
  { label: "Merge PDF", href: "#" },
  { label: "Compress PDF", href: "#" },
  { label: "Split PDF", href: "#" },
];

const datas = [
  { title: "Convert from PDF", links: convertFromPdf },
  { title: "Convert to PDF", links: convertToPdf },
  { title: "View & Edit", links: viewEdit },
  { title: "Sign & Secure", links: signSecure },
  { title: "Manage PDF Files", links: managePDFFiles },
  { title: "More", links: headerData },
];


const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-6 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          
          {datas.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">{section.title}</h4>
              <ul>
                {section.links.map((item, index) => (
                  <li key={index} className="pb-5">
                    <Link
                      href={item.href}
                      className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-5">
          <div>
            <Logo />
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-5 mb-16 max-w-70%">
              Open an account in minutes, get full financial
              control for much longer.
            </p>
          </div>
        </div>
        <div className="border-t border-grey/15 dark:border-white/15 py-10 flex justify-between items-center">
          <p className="text-sm text-black/70 dark:text-white/70">
            PDFProdigy™ is a registered trademark of Software<br/>
            Copyright © 2025 All rights reserved. 
          </p>

          <div className="flex gap-6 items-center">
            <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
              <Icon
                icon="fa6-brands:facebook-f"
                width="16"
                height="16"
                className=" group-hover:text-white text-black"
              />
            </Link>
            <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
              <Icon
                icon="fa6-brands:instagram"
                width="16"
                height="16"
                className=" group-hover:text-white text-black"
              />
            </Link>
            <Link href="#" className="group bg-white hover:bg-primary rounded-full shadow-xl p-3">
              <Icon
                icon="fa6-brands:x-twitter"
                width="16"
                height="16"
                className=" group-hover:text-white text-black"
              />
            </Link>
          </div>
          
          <div className="">
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 border-r border-grey/15 dark:border-white/15 hover:text-primary dark:hover:text-primary">Privacy policy</Link>
            <Link href="#" className="text-sm text-black/70 dark:text-white/70 px-5 hover:text-primary dark:hover:text-primary">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
