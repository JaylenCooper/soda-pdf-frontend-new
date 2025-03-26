import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const FooterBottom: FC = () => {
  return (
    <div>
      <div className="col-span-2">
        <Logo />
        <p className="text-xs font-medium text-grey dark:text-white/50 mt-5 mb-16 max-w-70%">
          Open an account in minutes, get full financial
          control for much longer.
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
      </div>

      <div className="">
        <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">More</h4>
        <ul>
          {headerData.map((item, index) => (
            <li key={index} className="pb-4">
              <Link
                href={item.href}
                className="text-black/70 dark:text-white/70 dark:hover:text-primary hover:text-primary text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterBottom; 