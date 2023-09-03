import Link from "next/link";
import React from "react";

const Drawer = ({ handleLinkClick }) => {
  return (
    <div className="h-auto p-3">
      <ul className="flex flex-col gap-3 w-full">
        <li className="flex">
          <Link onClick={handleLinkClick} href={"/"} className="uppercase text-[#696E76] dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-neutral-950 flex items-center gap-x-4 w-full px-4 py-2 rounded-lg">
            Home
          </Link>
        </li>
        <li className="flex">
          <Link onClick={handleLinkClick} href={"/"} className="uppercase text-[#696E76] dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-neutral-950 flex items-center gap-x-4 w-full px-4 py-2 rounded-lg">
          Works
          </Link>
        </li>
        <li className="flex">
          <Link onClick={handleLinkClick} href={"/"} className="uppercase text-[#696E76] dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-neutral-950 flex items-center gap-x-4 w-full px-4 py-2 rounded-lg">
          technologies
          </Link>
        </li>
        <li className="flex">
          <Link onClick={handleLinkClick} href={"/"} className="uppercase text-[#696E76] dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-neutral-950 flex items-center gap-x-4 w-full px-4 py-2 rounded-lg">
            services
          </Link>
        </li>
        <li className="flex">
          <Link onClick={handleLinkClick} href={"/"} className="uppercase text-[#696E76] dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-neutral-950 flex items-center gap-x-4 w-full px-4 py-2 rounded-lg">
          company
          </Link>
        </li>
        <li className="flex">
          <Link onClick={handleLinkClick} href={"/"} className="uppercase text-[#696E76] dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-neutral-950 flex items-center gap-x-4 w-full px-4 py-2 rounded-lg">
          contacts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
