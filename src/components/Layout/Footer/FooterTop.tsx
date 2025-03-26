import React, { FC } from "react";
import Link from "next/link";

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
];

const FooterTop: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
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
  );
};

export default FooterTop; 